"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CreateCardForm } from "./CreateCardForm";
import Confetti from "./Confetti";

type CreateCardDialogProps = {
  notebookId: string;
};

export const CreateCardDialog = ({ notebookId }: CreateCardDialogProps) => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false);
      }, 1200);
    }
  });

  return (
    <div className="border border-foreground min-w-[300px] w-[95vw] md:w-[300px] rounded-lg flex items-center justify-center">
      {isVisible && <Confetti />}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="p-3 min-w-[300px] w-[100%]">
          Create Card
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="self-center mb-3">Create Card</DialogTitle>
            <DialogDescription>
              <CreateCardForm
                setIsVisible={setIsVisible}
                setOpen={setOpen}
                notebookId={notebookId}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
