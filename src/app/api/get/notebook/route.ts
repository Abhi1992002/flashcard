import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const session = await getAuthSession();
    const notebook = await prisma.user.findMany({
      where: {
        id: session?.user.id,
      },
      include: {
        notebooks: true,
      },
    });
    console.log(notebook);
    return NextResponse.json(
      { notebook: notebook[0].notebooks },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json("Internal Server error", {
      status: 500,
    });
  }
};
