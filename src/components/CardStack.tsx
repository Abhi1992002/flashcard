import { getAuthSession } from "@/lib/auth";
import React from "react";

type CardStackProps = {};

export const CardStack = async ({}: CardStackProps) => {
  const cardColors = [
    "bg-gradient-to-tr to-blue-300 from-blue-400",
    "bg-gradient-to-tr to-pink-300 from-pink-400",
    "bg-gradient-to-tr to-green-300 from-green-400",
    "bg-gradient-to-tr to-orange-300 from-orange-400",
    "bg-gradient-to-tr to-red-300 from-red-400",
  ];

  const session = await getAuthSession();

  return (
    <>
      <div className="w-[250px] min-h-[250px] h-[250px] relative">
        <div
          className={`absolute w-[100%] h-[100%] rounded-xl z-[5] border text-black border-black ${cardColors[0]}`}
        >
          {session?.user.name}
        </div>
      </div>
    </>
  );
};
