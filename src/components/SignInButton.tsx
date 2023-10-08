"use client";
import React from "react";
import { Buttons } from "./Buttons";
import { signIn } from "next-auth/react";

export const SignInButton = () => {
  return (
    <>
      <Buttons
        onClick={() => {
          signIn("google");
        }}
      >
        Signin
      </Buttons>
    </>
  );
};
