import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Cross } from "lucide-react";
import { NoteBookInput } from "./NoteBookInput";
import { Notebook } from "@prisma/client";
import { CardStack } from "../CardStack";

type CreateProps = {
  notebook?: Notebook[];
};

export const Create = ({ notebook }: CreateProps) => {
  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center ">
      <ScrollArea className="w-[100%] h-[90vh] flex items-center ">
        <div className="flex gap-4 w-[full] flex-wrap  justify-center mb-[50px] pt-[25px]">
          <div>
            <Dialog>
              <DialogTrigger className="w-[95vw] hover:scale-105 transition-all duration-300 ease-in-out border-2 rounded-3xl sm:w-[250px] h-[250px] flex items-center flex-col justify-center hover:bg-foreground/90 hover:text-background">
                <h1 className="text-xl font-bold mb-[30px]">Create Notebook</h1>
                <Cross />
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle className="self-center mb-3">
                    Create Notebook
                  </DialogTitle>
                  <DialogDescription>
                    <NoteBookInput />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          {notebook?.map((book, i) => {
            return (
              <div key={i}>
                <CardStack notebook={book} />
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};
