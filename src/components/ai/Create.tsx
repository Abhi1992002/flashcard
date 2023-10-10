import { Cross } from "lucide-react";
import React from "react";
import { NoteBookInputAi } from "./NoteBookInputAi";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CreateAiNotebookProps = {};

export const CreateAiNotebook = ({}: CreateAiNotebookProps) => {
  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger className="w-[95vw] hover:scale-105 transition-all duration-300 ease-in-out border-2 rounded-3xl sm:w-[250px] h-[250px] flex items-center flex-col justify-center hover:bg-foreground/90 hover:text-background">
            <h1 className="text-xl font-bold mb-[30px]">Create Using Ai</h1>
            <Cross />
          </DialogTrigger>
          <DialogContent className="">
            <DialogHeader>
              <DialogTitle className="self-center mb-3">
                Create Notebook
              </DialogTitle>
              <DialogDescription>
                <NoteBookInputAi />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
