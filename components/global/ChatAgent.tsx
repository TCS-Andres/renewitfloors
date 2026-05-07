"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { useLanguage } from "@/components/global/LanguageProvider";
import { STARTER_CHIPS } from "@/lib/agent/systemPrompt";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type ChatPhase = "chat" | "handoff-form" | "handoff-sent";

const ESCALATE_TAG = "[ESCALATE]";
const NEXT_DELIMITER = /\s*\[NEXT\]\s*/g;
/** Hold every assistant reply for this long before it appears, so the chat
 * feels like a real person typing instead of an instant API response. */
const RESPONSE_DELAY_MS = 3000;

/** Pull plain text out of a UIMessage's parts. */
function messageText(msg: { parts: Array<{ type: string; text?: string }> }): string {
  return (msg.parts ?? [])
    .filter((p) => p.type === "text" && typeof p.text === "string")
    .map((p) => p.text!)
    .join("");
}

/** Last-line-of-defense em-dash scrub. The system prompt forbids em dashes
 * but if the model slips, we replace them with safer punctuation before
 * the user ever sees them. " — " becomes ". " (sentence break). Bare "—"
 * becomes ", " (clause break). En dashes (–) get the same treatment. */
function scrubEmDashes(text: string): string {
  return text
    .replace(/\s+—\s+/g, ". ")
    .replace(/\s+–\s+/g, ". ")
    .replace(/—/g, ", ")
    .replace(/–/g, ", ");
}

export function ChatAgent() {
  const { locale } = useLanguage();
  const isEs = locale === "es";

  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [phase, setPhase] = React.useState<ChatPhase>("chat");

  // useChat is keyed off transport — we recreate it whenever locale flips so
  // the server gets the right language context for new turns.
  const transport = React.useMemo(
    () =>
      new DefaultChatTransport({
        api: "/api/chat",
        body: { locale },
      }),
    [locale],
  );

  const { messages, sendMessage, status, error } = useChat({ transport });

  const isStreaming = status === "submitted" || status === "streaming";

  // 3-second response delay. Whenever the user sends, we hold any incoming
  // assistant reply behind the delay so it feels like Miriam is typing.
  const [delayActive, setDelayActive] = React.useState(false);
  const delayTimerRef = React.useRef<number | undefined>(undefined);
  const startDelay = React.useCallback(() => {
    setDelayActive(true);
    if (delayTimerRef.current) window.clearTimeout(delayTimerRef.current);
    delayTimerRef.current = window.setTimeout(() => {
      setDelayActive(false);
      delayTimerRef.current = undefined;
    }, RESPONSE_DELAY_MS);
  }, []);
  React.useEffect(() => {
    return () => {
      if (delayTimerRef.current) window.clearTimeout(delayTimerRef.current);
    };
  }, []);

  // Log any chat error to the console so we can debug from DevTools.
  React.useEffect(() => {
    if (error) console.error("[ChatAgent] error:", error);
  }, [error]);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on new messages
  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, phase]);

  // Focus input when chat opens
  React.useEffect(() => {
    if (open && phase === "chat") {
      const t = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(t);
    }
  }, [open, phase]);

  // Lock body scroll on mobile when chat is open full-screen
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 1023px)").matches;
    if (open && isMobile) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // Detect [ESCALATE] tag in the latest streamed assistant message → flip to handoff form.
  const lastAssistant = [...messages].reverse().find((m) => m.role === "assistant");
  const lastAssistantText = lastAssistant ? messageText(lastAssistant) : "";
  React.useEffect(() => {
    if (
      phase === "chat" &&
      lastAssistantText.trimStart().startsWith(ESCALATE_TAG) &&
      !isStreaming
    ) {
      // Wait until streaming finishes before flipping UI so the user can read
      // the agent's reply, then auto-show the handoff form.
      const t = setTimeout(() => setPhase("handoff-form"), 600);
      return () => clearTimeout(t);
    }
  }, [lastAssistantText, isStreaming, phase]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isStreaming || delayActive) return;
    startDelay();
    sendMessage({ text });
    setInput("");
  };

  const useStarterChip = (chip: string) => {
    if (isStreaming || delayActive) return;
    startDelay();
    sendMessage({ text: chip });
  };

  const labels = {
    title: "Miriam",
    subtitle: isEs
      ? "Asistente de ReNewIt Floors"
      : "ReNewIt Floors assistant",
    greetingTitle: isEs
      ? "¡Hola! Soy Miriam 👋 ¿Qué está pasando con sus pisos?"
      : "Hey there! I'm Miriam 👋 What's going on with your floors?",
    greetingBody: isEs
      ? "Cuénteme un poco y la ayudo a encontrar el camino correcto."
      : "Tell me a bit and I'll point you in the right direction.",
    placeholder: isEs ? "Escriba su mensaje…" : "Type a message…",
    send: isEs ? "Enviar" : "Send",
    handoffTitle: isEs ? "Hablemos directamente" : "Let's connect directly",
    handoffSub: isEs
      ? "Comparta sus datos y el equipo le contactará en un día laboral."
      : "Share your details and the team will be in touch within one business day.",
    name: isEs ? "Nombre" : "Name",
    phone: isEs ? "Teléfono" : "Phone",
    description: isEs
      ? "Cuéntenos sobre su piso"
      : "Tell us about your floor",
    submit: isEs ? "Enviar Solicitud" : "Send Request",
    callNow: isEs ? "O llame ahora:" : "Or call now:",
    sentTitle: isEs ? "¡Listo!" : "All set!",
    sentBody: isEs
      ? "Le contactaremos en un día laboral. Si prefiere llamar ahora, marque al"
      : "We'll be in touch within one business day. If you'd rather call now, give us a ring at",
    cancel: isEs ? "Cancelar" : "Cancel",
    bubble: isEs ? "Chatear con Miriam" : "Chat with Miriam",
  };

  return (
    <>
      {/* Floating launch button — hidden when panel is open */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={labels.bubble}
          className={cn(
            "fixed z-30 flex items-center gap-2 rounded-full bg-[var(--color-rust)] px-5 py-3.5 text-[14px] font-semibold text-white shadow-lg transition-all duration-300 ease-out",
            "hover:bg-[var(--color-rust-dark)] hover:-translate-y-0.5 active:scale-95",
            "bottom-20 right-5 lg:bottom-8 lg:right-8",
          )}
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">{labels.bubble}</span>
        </button>
      )}

      {/* Open panel */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={labels.title}
          className={cn(
            "fixed z-[70] flex flex-col bg-white shadow-2xl",
            // Mobile: full screen
            "inset-0 lg:inset-auto",
            // Desktop: bottom-right panel
            "lg:bottom-8 lg:right-8 lg:w-[400px] lg:h-[640px] lg:rounded-[10px] lg:border lg:border-[var(--color-stone)]",
            "overflow-hidden",
          )}
        >
          {/* Header */}
          <header className="flex items-center justify-between gap-3 border-b border-[var(--color-stone)] bg-[var(--color-charcoal)] px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/miriam.jpg"
                  alt="Miriam, ReNewIt Floors assistant"
                  className="h-full w-full object-cover"
                  width={40}
                  height={40}
                />
              </div>
              <div className="leading-tight">
                <div className="font-display text-[16px] font-semibold">
                  {labels.title}
                </div>
                <div className="flex items-center gap-1.5 text-[12px] text-white/70">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-verdigris)]" />
                  {labels.subtitle}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={isEs ? "Cerrar" : "Close"}
              className="-mr-1 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          {/* Body */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto bg-[var(--color-cream)] px-4 py-5 text-[15px]"
          >
            {phase === "chat" && messages.length === 0 && (
              <Greeting
                title={labels.greetingTitle}
                body={labels.greetingBody}
                chips={STARTER_CHIPS[locale]}
                onPick={useStarterChip}
              />
            )}

            {phase === "chat" && messages.length > 0 && (
              <div className="space-y-3">
                {(() => {
                  // During the post-send delay, hide the in-flight assistant
                  // message so the typing dots own the screen for the full
                  // 3 seconds. Once the delay clears, the assistant bubble(s)
                  // pop in with their entrance animation.
                  const lastMsg = messages[messages.length - 1];
                  const hideLastAssistant =
                    delayActive && lastMsg?.role === "assistant";
                  const renderable = hideLastAssistant
                    ? messages.slice(0, -1)
                    : messages;

                  return renderable.flatMap((m) => {
                    const text = messageText(m);

                    // User messages render as a single bubble.
                    if (m.role !== "assistant") {
                      return [<Bubble key={m.id} role={m.role} text={text} />];
                    }

                    // Assistant: strip [ESCALATE], scrub any em dashes that
                    // slipped past the prompt rule, then split on [NEXT] so
                    // a single model response can render as multiple bubbles
                    // like a real text exchange.
                    const escapeStripped = text.trimStart().startsWith(ESCALATE_TAG)
                      ? text.replace(ESCALATE_TAG, "").trim()
                      : text;
                    const cleaned = scrubEmDashes(escapeStripped);
                    const segments = cleaned
                      .split(NEXT_DELIMITER)
                      .map((s) => s.trim())
                      .filter((s) => s.length > 0);

                    if (segments.length === 0) return [];
                    return segments.map((seg, i) => (
                      <Bubble
                        key={`${m.id}-${i}`}
                        role="assistant"
                        text={seg}
                      />
                    ));
                  });
                })()}
                {(delayActive ||
                  (isStreaming &&
                    messages[messages.length - 1]?.role === "user")) && (
                  <Bubble role="assistant" text="" pulsing />
                )}
                {error && (
                  <div className="rounded-[8px] border border-red-300 bg-red-50 p-3 text-[13px] text-red-900">
                    <div className="font-semibold">
                      {isEs ? "Algo falló" : "Something went wrong"}
                    </div>
                    <div className="mt-1 break-words">
                      {error.message ?? String(error)}
                    </div>
                    <div className="mt-2 text-red-800/80">
                      {isEs
                        ? "Revise la consola del navegador y los registros del servidor. Si el problema persiste, llámenos directamente al teléfono que aparece abajo."
                        : "Check the browser console and server logs. If the issue persists, please call us directly at the number below."}
                    </div>
                  </div>
                )}
              </div>
            )}

            {phase === "handoff-form" && (
              <HandoffForm
                labels={labels}
                onCancel={() => setPhase("chat")}
                onSent={() => setPhase("handoff-sent")}
              />
            )}

            {phase === "handoff-sent" && (
              <HandoffSent labels={labels} />
            )}
          </div>

          {/* Footer (input + manual handoff link) — only in chat phase */}
          {phase === "chat" && (
            <div className="border-t border-[var(--color-stone)] bg-white">
              {/* Always-available bypass: lets the user skip the chat and go
                  straight to the team-callback form. Also a reliable manual
                  way to test that FormSubmit submissions are arriving. */}
              <button
                type="button"
                onClick={() => setPhase("handoff-form")}
                className="block w-full border-b border-[var(--color-stone)] py-2 text-center text-[12px] font-medium text-[var(--color-slate)] transition-colors hover:bg-[var(--color-cream)] hover:text-[var(--color-rust)]"
              >
                {isEs
                  ? "O deje sus datos y le llamamos →"
                  : "Or leave your info and we'll reach out →"}
              </button>
              <form onSubmit={handleSubmit} className="p-3">
                <div className="flex items-end gap-2">
                  <textarea
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(e);
                      }
                    }}
                    placeholder={labels.placeholder}
                    rows={1}
                    disabled={isStreaming}
                    className="max-h-32 flex-1 resize-none rounded-[6px] border border-[var(--color-stone)] bg-[var(--color-cream)] px-3 py-2 text-[15px] text-[var(--color-charcoal)] placeholder:text-[var(--color-slate)]/60 focus:border-[var(--color-rust)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/20 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isStreaming}
                    aria-label={labels.send}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-rust)] text-white transition-colors hover:bg-[var(--color-rust-dark)] disabled:opacity-30"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
}

/* ============== Sub-components ============== */

function Greeting({
  title,
  body,
  chips,
  onPick,
}: {
  title: string;
  body: string;
  chips: string[];
  onPick: (chip: string) => void;
}) {
  return (
    <div>
      <div className="rounded-[10px] bg-white border border-[var(--color-stone)] p-4">
        <div className="font-display text-[18px] font-semibold leading-snug text-[var(--color-charcoal)]">
          {title}
        </div>
        <div className="mt-1.5 text-[14px] leading-relaxed text-[var(--color-slate)]">
          {body}
        </div>
      </div>
      <div className="mt-3 grid gap-2">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onPick(chip)}
            className="rounded-full border border-[var(--color-stone)] bg-white px-4 py-2 text-left text-[13px] font-medium text-[var(--color-charcoal)] transition-colors hover:border-[var(--color-rust)] hover:bg-[var(--color-rust)] hover:text-white"
          >
            {chip}
          </button>
        ))}
      </div>
    </div>
  );
}

function Bubble({
  role,
  text,
  pulsing = false,
}: {
  role: "user" | "assistant" | "system";
  text: string;
  pulsing?: boolean;
}) {
  const isUser = role === "user";
  const reduced = useReducedMotion();
  // Each bubble fades in and slides up gently on mount. Framer Motion only
  // fires `initial` on first mount, so re-renders during streaming (token
  // appended to the same bubble) don't re-trigger the animation.
  const initial = reduced
    ? { opacity: 0 }
    : { opacity: 0, y: 8, scale: 0.96 };
  const animate = { opacity: 1, y: 0, scale: 1 };
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-[14px] px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap shadow-sm",
          isUser
            ? "bg-[var(--color-rust)] text-white rounded-br-sm"
            : "bg-white text-[var(--color-charcoal)] border border-[var(--color-stone)] rounded-bl-sm",
        )}
      >
        {pulsing ? (
          <span className="inline-flex items-center gap-1.5 py-0.5">
            <Dot delay={0} />
            <Dot delay={160} />
            <Dot delay={320} />
          </span>
        ) : (
          renderWithLinks(text)
        )}
      </div>
    </motion.div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="inline-block h-2 w-2 rounded-full bg-[var(--color-slate)]/60"
      style={{
        animation: `chat-pulse 1.3s ease-in-out ${delay}ms infinite`,
      }}
    />
  );
}

/** Linkify Markdown-style [label](url) and bare https URLs in agent replies. */
function renderWithLinks(text: string): React.ReactNode {
  if (!text) return null;
  const parts: React.ReactNode[] = [];
  // Match [label](url) first, then bare URLs.
  const regex = /\[([^\]]+)\]\(([^)\s]+)\)|(https?:\/\/[^\s)]+)/g;
  let lastIdx = 0;
  let key = 0;
  for (const match of text.matchAll(regex)) {
    const start = match.index!;
    if (start > lastIdx) parts.push(text.slice(lastIdx, start));
    if (match[1] && match[2]) {
      parts.push(
        <a
          key={`l${key++}`}
          href={match[2]}
          className="font-semibold underline underline-offset-2 hover:opacity-80"
          target={match[2].startsWith("/") ? "_self" : "_blank"}
          rel="noopener noreferrer"
        >
          {match[1]}
        </a>,
      );
    } else if (match[3]) {
      parts.push(
        <a
          key={`l${key++}`}
          href={match[3]}
          className="font-semibold underline underline-offset-2 hover:opacity-80"
          target="_blank"
          rel="noopener noreferrer"
        >
          {match[3]}
        </a>,
      );
    }
    lastIdx = start + match[0].length;
  }
  if (lastIdx < text.length) parts.push(text.slice(lastIdx));
  return parts;
}

function HandoffForm({
  labels,
  onCancel,
  onSent,
}: {
  labels: { handoffTitle: string; handoffSub: string; name: string; phone: string; description: string; submit: string; callNow: string; cancel: string };
  onCancel: () => void;
  onSent: () => void;
}) {
  const formRef = React.useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = React.useState(false);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);

    // Use FormSubmit's AJAX endpoint (returns JSON + CORS headers) so we can
    // actually observe success/failure rather than fire-and-forget.
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload: Record<string, string> = {};
    fd.forEach((v, k) => {
      payload[k] = typeof v === "string" ? v : "";
    });

    try {
      const res = await fetch(site.formSubmitAjaxEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as {
        success?: string | boolean;
        message?: string;
      };
      const ok =
        res.ok &&
        (json.success === "true" || json.success === true || res.status === 200);
      if (!ok) {
        throw new Error(json.message || `Submission failed (HTTP ${res.status})`);
      }
      onSent();
    } catch (err) {
      console.error("[ChatAgent] handoff submit failed:", err);
      setSubmitError(
        err instanceof Error ? err.message : "Submission failed. Please call us.",
      );
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <div className="rounded-[10px] bg-white border border-[var(--color-stone)] p-4">
        <div className="font-display text-[17px] font-semibold leading-snug text-[var(--color-charcoal)]">
          {labels.handoffTitle}
        </div>
        <div className="mt-1.5 text-[13px] leading-relaxed text-[var(--color-slate)]">
          {labels.handoffSub}
        </div>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="mt-3 space-y-3">
        <input
          type="hidden"
          name="_subject"
          value="Chat handoff: needs human follow-up"
        />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input
          type="text"
          name="name"
          required
          placeholder={labels.name}
          className="w-full rounded-[6px] border border-[var(--color-stone)] bg-white px-3 py-2.5 text-[14px] focus:border-[var(--color-rust)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/20"
        />
        <input
          type="tel"
          name="phone"
          required
          placeholder={labels.phone}
          className="w-full rounded-[6px] border border-[var(--color-stone)] bg-white px-3 py-2.5 text-[14px] focus:border-[var(--color-rust)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/20"
        />
        <textarea
          name="floor_description"
          rows={3}
          placeholder={labels.description}
          className="w-full resize-none rounded-[6px] border border-[var(--color-stone)] bg-white px-3 py-2.5 text-[14px] focus:border-[var(--color-rust)] focus:outline-none focus:ring-2 focus:ring-[var(--color-rust)]/20"
        />
        {submitError && (
          <div
            role="alert"
            className="rounded-[6px] border border-red-300 bg-red-50 px-3 py-2 text-[12.5px] leading-snug text-red-900"
          >
            {submitError}
          </div>
        )}
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={submitting}
            className="text-[13px] font-medium text-[var(--color-slate)] hover:text-[var(--color-charcoal)] disabled:opacity-50"
          >
            {labels.cancel}
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="rounded-[6px] bg-[var(--color-rust)] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-rust-dark)] disabled:opacity-60"
          >
            {submitting ? "…" : labels.submit}
          </button>
        </div>
      </form>
      <div className="mt-4 text-center text-[13px] text-[var(--color-slate)]">
        {labels.callNow}{" "}
        <a
          href={site.phoneHref}
          className="font-semibold text-[var(--color-rust)] hover:underline"
        >
          {site.phone}
        </a>
      </div>
    </div>
  );
}

function HandoffSent({
  labels,
}: {
  labels: { sentTitle: string; sentBody: string };
}) {
  return (
    <div className="rounded-[10px] bg-white border border-[var(--color-stone)] p-5 text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-verdigris)]/20 text-[var(--color-verdigris)]">
        ✓
      </div>
      <div className="font-display text-[18px] font-semibold text-[var(--color-charcoal)]">
        {labels.sentTitle}
      </div>
      <div className="mt-2 text-[14px] leading-relaxed text-[var(--color-slate)]">
        {labels.sentBody}{" "}
        <a
          href={site.phoneHref}
          className="font-semibold text-[var(--color-rust)] hover:underline"
        >
          <Phone className="inline h-3 w-3 align-text-bottom" /> {site.phone}
        </a>
        .
      </div>
    </div>
  );
}
