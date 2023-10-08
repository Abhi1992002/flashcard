"use client";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import clsx from "clsx";

type ButtonsProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  color?: string;
  borderColor?: string;
};

export const Buttons = ({
  children,
  className,
  onClick,
  color,
  borderColor,
}: ButtonsProps) => {
  return (
    <motion.div
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 0.95 }}
      className={`relative ${className} w-[100px] `}
    >
      <Button
        onClick={onClick}
        className={clsx(
          " text-black border-2 w-[100%] h-[100%] hover:bg-gray-200",
          color ? color : "bg-white",
          borderColor ? borderColor : "border-black"
        )}
      >
        {children}
      </Button>
      <div className="absolute top-1 left-1 z-[-1] rounded-md  bg-white border-2 border-black w-[100%] h-[100%]"></div>
    </motion.div>
  );
};
