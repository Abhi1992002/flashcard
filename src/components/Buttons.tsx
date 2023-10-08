"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

type ButtonsProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Buttons = ({ children, className, onClick }: ButtonsProps) => {
  return (
    <motion.div
      whileTap={{ scale: 1.1 }}
      whileHover={{ scale: 0.95 }}
      className={`relative ${className} w-[100px] `}
    >
      <Button
        onClick={onClick}
        className="border-black bg-white text-black border-2 w-[100%]  hover:bg-gray-200"
      >
        {children}
      </Button>
      <div className="absolute top-1 left-1 z-[-1] rounded-md  bg-white border-2 border-black w-[100%] h-[100%]"></div>
    </motion.div>
  );
};
