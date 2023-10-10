"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Buttons } from "./Buttons";

type FlashCardProps = {
  color: string;
  question: string;
  answer: string;
};

export const FlashCard = ({ color, question, answer }: FlashCardProps) => {
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
      className={`flip-card sm:w-[400px] w-[90vw] min-h-[350px] h-[350px] relative`}
      key={color}
    >
      {/* card */}
      <motion.div
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.2, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
        className={`w-[100%] flip-card-inner h-[100%] rounded-3xl ${color} flex items-center justify-center dark:border-2 dark:border-black dark:shadow-none shadow-full z-1`}
      >
        {/* front */}
        <div className="w-[95%] flip-card-front h-[95%] flex items-center justify-center flex-col gap-[20px]">
          <h1 className="text-xl text-center text-black">{question}</h1>
          <Buttons onClick={() => handleFlip()}>Open</Buttons>
        </div>

        {/* back */}
        <div className="w-[95%] h-[95%] flip-card-back flex items-center justify-center flex-col gap-[20px]">
          <h1 className="text-xl text-center text-black">{answer}</h1>
          <Buttons onClick={() => handleFlip()}>Close</Buttons>
        </div>
      </motion.div>
    </div>
  );
};
