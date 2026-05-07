/**
 * POST /api/handoff
 *
 * Receives a chat handoff payload (name + phone + floor description) and
 * forwards it to the FormSubmit endpoint server-side. We do this on the
 * server instead of from the browser because:
 *   1. FormSubmit's AJAX endpoint can be inconsistent across browsers and
 *      origins. The traditional form-POST endpoint is more reliable.
 *   2. Server-side fetch logs end up in Vercel function logs, so we get
 *      observability into every submission attempt.
 *   3. The browser code stays simple: POST JSON, get JSON back.
 */

import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type HandoffPayload = {
  name?: string;
  phone?: string;
  floor_description?: string;
  locale?: string;
};

export async function POST(req: Request) {
  console.log("[/api/handoff] incoming request");

  let body: HandoffPayload;
  try {
    body = (await req.json()) as HandoffPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const description = (body.floor_description ?? "").trim();
  const locale = body.locale === "es" ? "es" : "en";

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 400 },
    );
  }

  // Build a form-encoded body. FormSubmit's traditional endpoint expects this
  // shape and is the same flow the contact form already uses (which has been
  // confirmed delivering email).
  const params = new URLSearchParams();
  params.set("_subject", "Chat handoff: needs human follow-up");
  params.set("_template", "table");
  params.set("_captcha", "false");
  params.set("name", name);
  params.set("phone", phone);
  params.set("floor_description", description);
  params.set("locale", locale);
  params.set("_source", "chat-widget");

  console.log("[/api/handoff] forwarding to FormSubmit", {
    name,
    phone,
    locale,
    descriptionLength: description.length,
  });

  let formsubmitStatus = 0;
  try {
    const resp = await fetch(site.formSubmitEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        // FormSubmit expects an Origin/Referer that looks like a real site.
        Origin: site.url,
        Referer: `${site.url}/`,
      },
      body: params.toString(),
      // FormSubmit responds with a redirect (3xx) or a 200 success page.
      // Both indicate the email was queued. We don't need to follow.
      redirect: "manual",
    });
    formsubmitStatus = resp.status;
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[/api/handoff] FormSubmit network error:", msg);
    return NextResponse.json(
      { error: "Could not reach the email service. Please try again or call us." },
      { status: 502 },
    );
  }

  console.log("[/api/handoff] FormSubmit response status:", formsubmitStatus);

  // 2xx and 3xx (redirect to thank-you page) both indicate FormSubmit accepted
  // the submission. 4xx/5xx means it rejected.
  if (formsubmitStatus < 200 || formsubmitStatus >= 400) {
    return NextResponse.json(
      {
        error: `Email service returned status ${formsubmitStatus}. Please try again or call us.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
