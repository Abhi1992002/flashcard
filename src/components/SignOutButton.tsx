"use client";
import React from "react";
import { Buttons } from "./Buttons";
import { signOut } from "next-auth/react";

export const SignOutButton = () => {
  return (
    <>
      <Buttons
        onClick={() => {
          signOut();
        }}
      >
        SignOut
      </Buttons>
    </>
  );
};
