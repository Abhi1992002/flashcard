import { Notebook } from "@prisma/client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

type CardStackProps = {
  notebook: Notebook;
};

export const CardStack = ({ notebook }: CardStackProps) => {
  const router = useRouter();
  return (
    <>
      <div className="sm:w-[250px] w-[90vw] min-h-[250px] h-[250px] relative">
        <Button
          onClick={() => {
            router.push(`/create/${notebook.id}`);
          }}
          className={`absolute w-[100%] h-[100%] rounded-xl flex items-center justify-center z-[5] border text-black border-black ${notebook.color} hover:scale-105 transition-all duration-300 hover:cursor-pointer`}
        >
          {notebook.name}
        </Button>
      </div>
    </>
  );
};
