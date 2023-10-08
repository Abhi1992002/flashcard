import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { notebookSchema } from "@/validators/notebook";
import { NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    console.log(notebookSchema.parse(body));
    const { name, color } = notebookSchema.parse(body);
    const session = await getAuthSession();

    const notebook = await prisma.notebook.create({
      data: {
        name: name,
        color: color,
        userId: session?.user.id as string,
      },
    });

    return NextResponse.json({ notebook_id: notebook.id });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json("invalid body", { status: 400 });
    }
    return NextResponse.json("Internal server error", {
      status: 500,
    });
  }
}
