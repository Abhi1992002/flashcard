import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { strict_output } from "@/lib/gpt";
import { aiCardSchema } from "@/validators/aiCard";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { notebook, color, title, description } = aiCardSchema.parse(body);
    const session = await getAuthSession();

    const notebooks = await prisma.notebook.create({
      data: {
        name: notebook,
        color: color,
        userId: session?.user.id as string,
      },
    });

    const output_flashcard = await strict_output(
      "you are an ai which help me to create a flashcard",
      `i will give you a title and a description of topic , you need to create flashcard which basically have 30 advanced level question , 30 answer and 30 color of card note at leat 30, questtions should be advance level not beginner level , so new person can't find answer suppose i have a topic eg : docker , you need to create as much as question-answer that i need to cover this complete topic . the title of the topic is ${title} , the description is ${description},and choose the random color of card from red , pink , orange , green  and blue and please give me array of output json`,
      {
        title: "title of notebook",
        description: "description",
        flashcards:
          "array of object anf each object have answer , question and color",
      }
    );

    for (const card of output_flashcard["flashcards"]) {
      const { question, answer } = card;

      await prisma.flashCard.create({
        data: {
          answer,
          question,
          color,
          notebookId: notebooks.id,
        },
      });
    }

    console.log("course created");

    return NextResponse.json({ notebook_id: notebooks.id });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("invalid body", { status: 400 });
    }
    console.log(error);
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}
