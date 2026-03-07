"use client";

import { FormEvent, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export function PortfolioAssistant() {
  const t = useTranslations("assistant");
  const locale = useLocale();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"openai" | "fallback" | null>(null);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    const value = input.trim();
    if (!value || loading) {
      return;
    }

    setMessages((current) => [...current, { role: "user", text: value }]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value, locale })
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload?.error ?? "Request failed");
      }

      setMode(payload.mode ?? null);
      setMessages((current) => [...current, { role: "assistant", text: payload.answer }]);
    } catch (error) {
      setMessages((current) => [
        ...current,
        { role: "assistant", text: `${t("error")} ${error instanceof Error ? error.message : ""}`.trim() }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-ink/12 bg-white/90 p-6 shadow-soft">
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{t("title")}</h2>
      <p className="mt-2 text-sm text-ink/75 sm:text-base">{t("subtitle")}</p>

      <div className="mt-5 rounded-xl border border-ink/10 bg-mist p-4">
        <p className="text-xs text-ink/70">
          {mode === "fallback" ? t("modeFallback") : mode === "openai" ? t("modeOpenAI") : t("modeUnknown")}
        </p>
        <div className="mt-3 max-h-[360px] space-y-3 overflow-y-auto pr-1">
          {messages.length === 0 ? (
            <p className="text-sm text-ink/70">{t("empty")}</p>
          ) : (
            messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-lg px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user" ? "bg-accent2 text-ink" : "bg-white text-ink/85"
                }`}
              >
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.08em] text-ink/60">
                  {message.role === "user" ? t("you") : t("assistantName")}
                </p>
                <p className="whitespace-pre-wrap">{message.text}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <form onSubmit={submit} className="mt-4 space-y-3">
        <label htmlFor="assistant-input" className="text-sm font-medium text-ink">
          {t("inputLabel")}
        </label>
        <textarea
          id="assistant-input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={t("placeholder")}
          rows={3}
          className="w-full rounded-xl border border-ink/15 bg-white px-3 py-2 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
        <button
          type="submit"
          disabled={loading}
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? t("sending") : t("send")}
        </button>
      </form>
    </div>
  );
}
