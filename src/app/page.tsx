"use client";
import { Buttons } from "@/components/Buttons";
import { CardStack } from "@/components/CardStack";
import { DarkToggle } from "@/components/DarkToggle";
import { FlashCard } from "@/components/FlashCard";

export default function Home() {
  const cards = [{}, {}, {}, {}, {}];
  return (
    <div className="py-[50px] pl-[30px]">
      <DarkToggle />
      <Buttons className="mt-[10px]">Hello</Buttons>
      <div className="flex gap-5 flex-wrap mt-[50px] mb-[50px]">
        {cards.map((card, i) => {
          return <FlashCard colorNumber={i as 1 | 2 | 3 | 4 | 5} />;
        })}
      </div>

      <div className="flex gap-5 flex-wrap mt-[50px] mb-[50px]">
        <CardStack />
        <CardStack />
        <CardStack />
        <CardStack />
        <CardStack />
        <CardStack />
        <CardStack />
      </div>
    </div>
  );
}
