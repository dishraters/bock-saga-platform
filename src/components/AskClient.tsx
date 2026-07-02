"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";

type AskResponse = {
  answer: string;
  sources: { title: string; url: string; summary: string }[];
};

export function AskClient({ suggestions }: { suggestions: string[] }) {
  const [question, setQuestion] = useState(suggestions[0] || "");
  const [result, setResult] = useState<AskResponse | null>(null);
  const [loading, setLoading] = useState(false);

  async function ask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const response = await fetch("/api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = (await response.json()) as AskResponse;
    setResult(data);
    setLoading(false);
  }

  return (
    <div className="grid gap-6">
      <form onSubmit={ask} className="grid gap-3">
        <textarea
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          className="min-h-32 w-full border border-[var(--line)] bg-[var(--bg)] p-4 text-base leading-7 text-[var(--ink)] outline-none focus:border-[var(--primary)]"
          placeholder="Ask about Carl, Ior Bock, Root Language, the Temple, books, or the Hoard."
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="inline-flex w-fit items-center gap-2 bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--bg)] disabled:opacity-50"
        >
          {loading ? "Checking sources" : "Ask from sources"}
          <Send className="size-4" aria-hidden />
        </button>
      </form>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            type="button"
            onClick={() => setQuestion(suggestion)}
            className="border border-[var(--line)] bg-[var(--surface)] px-3 py-2 text-left text-xs font-medium text-[var(--ink)]"
          >
            {suggestion}
          </button>
        ))}
      </div>
      {result ? (
        <section className="border border-[var(--line)] bg-[var(--surface)] p-5">
          <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">
            Source-backed answer
          </h2>
          <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[var(--muted)]">
            {result.answer}
          </p>
          <div className="mt-6 grid gap-3">
            {result.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--line)] bg-[var(--bg)] p-4 text-sm"
              >
                <span className="font-semibold text-[var(--ink)]">
                  {source.title}
                </span>
                <span className="mt-2 block text-xs leading-5 text-[var(--muted)]">
                  {source.summary}
                </span>
              </a>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
