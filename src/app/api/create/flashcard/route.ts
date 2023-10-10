import { prisma } from "@/lib/db";
import { flashcardSchema } from "@/validators/card";

import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { answer, question, color, notebookId } = flashcardSchema.parse(body);
    const flashcard = await prisma.flashCard.create({
      data: {
        answer,
        question,
        color,
        notebookId,
      },
    });
    console.log("hello");

    return NextResponse.json({ flashcard_id: flashcard.id });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("invalid body", { status: 400 });
    }
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}
