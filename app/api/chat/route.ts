/**
 * POST /api/chat — streams Claude responses for the support chat agent.
 *
 * Uses Vercel AI SDK v6 (streamText + UIMessage stream) so the frontend can
 * consume directly via @ai-sdk/react's useChat hook.
 *
 * Request body shape (UIMessage format):
 *   { messages: UIMessage[], locale?: 'en' | 'es' }
 *
 * Response: UIMessage stream (text/plain with structured parts the client hook
 * decodes automatically).
 */

import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { getSystemPrompt } from "@/lib/agent/systemPrompt";
import type { Locale } from "@/lib/i18n/dictionaries";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Hard caps so a runaway client can't burn tokens.
const MAX_MESSAGES_PER_REQUEST = 30;
const MODEL = "claude-sonnet-4-5"; // current production Sonnet alias

export async function POST(req: Request) {
  console.log("[/api/chat] incoming request");

  // Bail early if the API key isn't configured. The frontend treats any
  // non-stream response as "chat unavailable" and falls back to the phone CTA.
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error(
      "[/api/chat] ANTHROPIC_API_KEY env var is not set. " +
        "Add it to .env.local and restart `npm run dev`, or set it in Vercel project env vars.",
    );
    return new Response(
      JSON.stringify({ error: "Chat is not configured on this deployment." }),
      { status: 503, headers: { "Content-Type": "application/json" } },
    );
  }

  let body: { messages?: UIMessage[]; locale?: string };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const { messages, locale } = body;

  if (
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > MAX_MESSAGES_PER_REQUEST
  ) {
    return new Response(
      JSON.stringify({
        error: `messages must be a non-empty array (max ${MAX_MESSAGES_PER_REQUEST})`,
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  const validatedLocale: Locale = locale === "es" ? "es" : "en";

  try {
    const result = streamText({
      model: anthropic(MODEL),
      system: getSystemPrompt(validatedLocale),
      messages: await convertToModelMessages(messages),
      maxOutputTokens: 1024,
    });

    // Surface streaming errors to the client as a clean stream with an
    // [ERROR] marker the widget detects and falls back from.
    return result.toUIMessageStreamResponse({
      onError(err: unknown) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        // Log on the server too so we can debug from Vercel logs.
        console.error("[/api/chat] stream error:", msg);
        return `[ERROR] ${msg.slice(0, 200)}`;
      },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/chat] handler error:", msg);
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
