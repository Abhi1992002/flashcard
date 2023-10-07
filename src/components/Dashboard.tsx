import React from "react";
import { DarkToggle } from "./DarkToggle";
import { Buttons } from "./Buttons";
import { signIn } from "next-auth/react";
import { FlashCard } from "./FlashCard";

type DashboardProps = {};

export const Dashboard = ({}: DashboardProps) => {
  const cards = [{}, {}, {}, {}, {}];
  return (
    <div className="py-[50px] pl-[30px]">
      <DarkToggle />
      <Buttons
        onClick={() => {
          signIn("google");
        }}
      >
        Signin
      </Buttons>
      <Buttons className="mt-[10px]">Hello</Buttons>
      <div className="flex gap-5 flex-wrap mt-[50px] mb-[50px]">
        {cards.map((card, i) => {
          return <FlashCard key={i} colorNumber={i as 1 | 2 | 3 | 4 | 5} />;
        })}
      </div>
    </div>
  );
};
