"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Buttons } from "./Buttons";
import { CreateCardForm } from "./CreateCardForm";

type CreateCardDialogProps = {};

export const CreateCardDialog = ({}: CreateCardDialogProps) => {
  return (
    <div className="border border-foreground min-w-[300px] w-[95vw] md:w-[300px] rounded-lg flex items-center justify-center">
      <Dialog>
        <DialogTrigger className="p-3 min-w-[300px] w-[100%]">
          Create Card
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="self-center mb-3">Create Card</DialogTitle>
            <DialogDescription>
              <CreateCardForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
