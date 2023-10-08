"use client";
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Create } from "./Create";
import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { Buttons } from "../Buttons";

type MainConsoleProps = {};

export const MainConsole = ({}: MainConsoleProps) => {
  const [tabListOpen, setTabListOpen] = useState(true);
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
                Create Course
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
                <Create />
              </TabsContent>
              <TabsContent value="library">library</TabsContent>
              <TabsContent value="ai">ai</TabsContent>
              <TabsContent value="quiz">quiz</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};
