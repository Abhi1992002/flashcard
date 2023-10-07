"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Buttons } from "./Buttons";

type FlashCardProps = {
  colorNumber: 1 | 2 | 3 | 4 | 5;
};

export const FlashCard = ({ colorNumber }: FlashCardProps) => {
  const cardColors = [
    "bg-gradient-to-tr to-blue-300 from-blue-400",
    "bg-gradient-to-tr to-pink-300 from-pink-400",
    "bg-gradient-to-tr to-green-300 from-green-400",
    "bg-gradient-to-tr to-orange-300 from-orange-400",
    "bg-gradient-to-tr to-red-300 from-red-400",
  ];

  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  }

  return (
    <div
      className={`flip-card w-[250px] min-h-[350px] h-[350px] relative`}
      key={colorNumber}
    >
      {/* card */}
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.2, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
        className={`w-[100%] flip-card-inner h-[100%] rounded-3xl ${cardColors[colorNumber]} flex items-center justify-center dark:border-2 dark:border-black dark:shadow-full shadow-full z-1`}
      >
        {/* front */}
        <div className="w-[95%] flip-card-front h-[95%] flex items-center justify-center flex-col gap-[20px]">
          <h1 className="text-xl text-center text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            praesentium sunt iste impedit accusamus nihil est aliquid culpa
            facilis odit?
          </h1>
          <Buttons onClick={() => handleFlip()}>Open</Buttons>
        </div>

        {/* back */}
        <div className="w-[95%] h-[95%] flip-card-back flex items-center justify-center flex-col gap-[20px]">
          <h1 className="text-xl text-center text-black">
            Answer Answer Answer Answer Answer Answer Answer
          </h1>
          <Buttons onClick={() => handleFlip()}>Close</Buttons>
        </div>
      </motion.div>
    </div>
  );
};
