import { CreateCardDialog } from "@/components/CreateCardDialog";
import { FlashCard } from "@/components/FlashCard";
import { prisma } from "@/lib/db";
import React from "react";

type CreatePageProps = {
  params: {
    notebookId: string;
  };
};

const CreatePage = async ({ params: { notebookId } }: CreatePageProps) => {
  const notebook = await prisma.notebook.findUnique({
    where: {
      id: notebookId,
    },
    include: {
      flashcards: true,
    },
  });

  return (
    <div className="w-[100vw] h-[100%] flex flex-col items-center justify-center">
      <div className="w-[95%] h-[95%] pt-[30px] flex items-center justify-center">
        <CreateCardDialog notebookId={notebookId} />
      </div>
      <div className="w-[95%] h-[95%] flex flex-wrap gap-[20px] justify-center mt-[100px]">
        {notebook?.flashcards.map((card) => {
          return (
            <>
              <FlashCard
                color={card.color as string}
                question={card.question as string}
                answer={card.answer as string}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CreatePage;
