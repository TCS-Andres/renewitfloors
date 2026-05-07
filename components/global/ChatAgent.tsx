"use client";

import * as React from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { useLanguage } from "@/components/global/LanguageProvider";
import { STARTER_CHIPS } from "@/lib/agent/systemPrompt";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type ChatPhase = "chat" | "handoff-form" | "handoff-sent";

const ESCALATE_TAG = "[ESCALATE]";

/** Pull plain text out of a UIMessage's parts. */
function messageText(msg: { parts: Array<{ type: string; text?: string }> }): string {
  return (msg.parts ?? [])
    .filter((p) => p.type === "text" && typeof p.text === "string")
    .map((p) => p.text!)
    .join("");
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

  const { messages, sendMessage, status } = useChat({ transport });

  const isStreaming = status === "submitted" || status === "streaming";
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
    if (!text || isStreaming) return;
    sendMessage({ text });
    setInput("");
  };

  const useStarterChip = (chip: string) => {
    if (isStreaming) return;
    sendMessage({ text: chip });
  };

  const labels = {
    title: isEs ? "Pregúntele a Jose" : "Ask Jose",
    subtitle: isEs ? "Soporte en línea" : "Online support",
    greetingTitle: isEs
      ? "Hola — soy el asistente de Jose."
      : "Hi — I'm Jose's assistant.",
    greetingBody: isEs
      ? "Pregúnteme sobre restauración de pisos, cobertura por área o lo que necesite saber."
      : "Ask me about floor restoration, your area, or anything you'd like to know.",
    placeholder: isEs ? "Escriba su pregunta…" : "Type your question…",
    send: isEs ? "Enviar" : "Send",
    handoffTitle: isEs ? "Que Jose le contacte" : "Have Jose reach out",
    handoffSub: isEs
      ? "Comparta sus datos y le contactamos en un día laboral."
      : "Share your details and we'll be in touch within one business day.",
    name: isEs ? "Nombre" : "Name",
    phone: isEs ? "Teléfono" : "Phone",
    description: isEs
      ? "Cuéntenos sobre su piso"
      : "Tell us about your floor",
    submit: isEs ? "Enviar Solicitud" : "Send Request",
    callNow: isEs ? "O llame ahora:" : "Or call now:",
    sentTitle: isEs ? "¡Recibido!" : "Got it!",
    sentBody: isEs
      ? "Jose le contactará en un día laboral. Si prefiere llamar ahora, marque al"
      : "Jose will be in touch within one business day. If you'd rather call now, ring",
    cancel: isEs ? "Cancelar" : "Cancel",
    bubble: isEs ? "Pregúntele a Jose" : "Ask Jose",
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-rust)] font-display text-[16px] font-bold">
                J
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
                {messages.map((m) => {
                  const text = messageText(m);
                  // Strip the [ESCALATE] tag from assistant messages we render
                  const display =
                    m.role === "assistant" && text.trimStart().startsWith(ESCALATE_TAG)
                      ? text.replace(ESCALATE_TAG, "").trim()
                      : text;
                  return <Bubble key={m.id} role={m.role} text={display} />;
                })}
                {isStreaming && messages[messages.length - 1]?.role === "user" && (
                  <Bubble role="assistant" text="" pulsing />
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

          {/* Footer (input) — only in chat phase */}
          {phase === "chat" && (
            <form
              onSubmit={handleSubmit}
              className="border-t border-[var(--color-stone)] bg-white p-3"
            >
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
  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-[10px] px-3.5 py-2.5 text-[14px] leading-relaxed whitespace-pre-wrap",
          isUser
            ? "bg-[var(--color-rust)] text-white rounded-br-sm"
            : "bg-white text-[var(--color-charcoal)] border border-[var(--color-stone)] rounded-bl-sm",
        )}
      >
        {pulsing ? (
          <span className="inline-flex items-center gap-1">
            <Dot delay={0} />
            <Dot delay={120} />
            <Dot delay={240} />
          </span>
        ) : (
          renderWithLinks(text)
        )}
      </div>
    </div>
  );
}

function Dot({ delay }: { delay: number }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--color-slate)]/60"
      style={{
        animation: `chat-pulse 1.4s ease-in-out ${delay}ms infinite`,
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit to FormSubmit using the same endpoint as the contact form.
    // We use a hidden iframe target so the page doesn't navigate away.
    const form = e.currentTarget;
    const data = new FormData(form);
    fetch(site.formSubmitEndpoint, {
      method: "POST",
      body: data,
      mode: "no-cors", // FormSubmit doesn't return CORS headers; no-cors is fine for fire-and-forget
    }).finally(onSent);
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
          value="Chat handoff — needs human follow-up"
        />
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
        <div className="flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="text-[13px] font-medium text-[var(--color-slate)] hover:text-[var(--color-charcoal)]"
          >
            {labels.cancel}
          </button>
          <button
            type="submit"
            className="rounded-[6px] bg-[var(--color-rust)] px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-rust-dark)]"
          >
            {labels.submit}
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
