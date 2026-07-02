import { NextRequest, NextResponse } from "next/server";
import { sourceLibrary } from "@/data/site";

function scoreSource(question: string, source: (typeof sourceLibrary)[number]) {
  const text = `${source.title} ${source.type} ${source.summary} ${source.keyPoints.join(
    " ",
  )}`.toLowerCase();
  const words = question
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2);
  return words.reduce((score, word) => score + (text.includes(word) ? 1 : 0), 0);
}

export async function POST(request: NextRequest) {
  const { question } = (await request.json()) as { question?: string };
  const cleanQuestion = question?.trim() || "";

  if (!cleanQuestion) {
    return NextResponse.json({
      answer: "Ask a question about Carl Borgen, Ior Bock, the Bock Saga, Root Language, the Temple, or the Hoard.",
      sources: [],
    });
  }

  const matches = sourceLibrary
    .map((source) => ({ source, score: scoreSource(cleanQuestion, source) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter((match) => match.score > 0);

  const selected =
    matches.length > 0
      ? matches.map((match) => match.source)
      : sourceLibrary.slice(0, 3);

  const answer = [
    `Based on the current source library, the best answer starts with ${selected[0].title}.`,
    selected
      .map((source) => {
        const points = source.keyPoints.slice(0, 2).join(" ");
        return `${source.title}: ${source.summary} ${points}`;
      })
      .join("\n\n"),
    "Editorial note: this assistant labels Bock Saga material as Carl Borgen's account, Ior Bock's claim, or Saga tradition unless stronger outside sourcing is added.",
  ].join("\n\n");

  return NextResponse.json({
    answer,
    sources: selected.map((source) => ({
      title: source.title,
      url: source.url,
      summary: source.summary,
    })),
  });
}
