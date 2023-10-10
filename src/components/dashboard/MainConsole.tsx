"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Create } from "./Create";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Buttons } from "../Buttons";
import { Notebook } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";
import { prisma } from "@/lib/db";
import axios from "axios";
import { CreateAiNotebook } from "../ai/Create";

type MainConsoleProps = {
  id?: string;
};

export const MainConsole = ({ id }: MainConsoleProps) => {
  const [tabListOpen, setTabListOpen] = useState(true);
  const [notebook, setNotebook] = useState<Notebook[]>();
  const { mutate: getAllNoteBooks } = useMutation({
    mutationFn: async () => {
      const response = await axios.post("/api/get/notebook");
      return response.data;
    },
  });
  useEffect(() => {
    getAllNoteBooks(undefined, {
      onSuccess: (data) => {
        console.log(data.notebook);
        setNotebook(data.notebook);
      },
      onError: () => {
        console.log("error");
      },
    });
  }, []);
  return (
    <>
      <div className="w-[100%] h-[100%] flex items-center justify-center">
        <div className="w-[100%] h-[100%]">
          <Tabs defaultValue="create" className="h-[100%] w-[100%] flex">
            {/*sidebar  */}
            <TabsList
              className={clsx(
                "items-start justify-start flex-col pt-[30px] bg-transparent h-[100%] border-r-2 flex-1",
                tabListOpen ? "flex lg:flex-1" : "hidden lg:flex lg:flex-1"
              )}
            >
              <Buttons
                onClick={() => setTabListOpen(false)}
                className="w-[95vw] self-center mb-[20px] lg:hidden"
              >
                <X />
              </Buttons>

              <TabsTrigger
                onClick={() => {
                  setTabListOpen(false);
                }}
                className="text-md mb-[15px] w-[95%] self-center"
                value="create"
              >
                NoteBooks
              </TabsTrigger>
              <TabsTrigger
                onClick={() => {
                  setTabListOpen(false);
                }}
                className="text-md mb-[15px] w-[95%] self-center"
                value="library"
              >
                Library
              </TabsTrigger>
              <TabsTrigger
                onClick={() => {
                  setTabListOpen(false);
                }}
                className="text-md mb-[15px] w-[95%] self-center"
                value="ai"
              >
                Create using AI
              </TabsTrigger>
              <TabsTrigger
                onClick={() => {
                  setTabListOpen(false);
                }}
                className="text-md mb-[15px] w-[95%] self-center"
                value="quiz"
              >
                Quiz
              </TabsTrigger>
            </TabsList>

            {/* main console */}
            <div
              className={clsx(
                "w-[95%] h-[95%] flex flex-col lg:flex-4",
                tabListOpen
                  ? "flex-none hidden lg:flex lg:flex-4"
                  : "flex-1 lg:flex-4"
              )}
            >
              <Buttons
                onClick={() => {
                  setTabListOpen(true);
                }}
                className="w-[95vw] self-center mb-[10px] mt-[30px]  lg:hidden"
              >
                <Menu />
              </Buttons>

              <TabsContent value="create">
                <Create notebook={notebook} />
              </TabsContent>
              <TabsContent value="library">library</TabsContent>
              <TabsContent
                className="flex items-center justify-center h-[100%]"
                value="ai"
              >
                <CreateAiNotebook />
              </TabsContent>
              <TabsContent value="quiz">quiz</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};
