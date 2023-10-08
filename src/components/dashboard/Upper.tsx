import React from "react";
import { DarkToggle } from "../DarkToggle";
import { SignInButton } from "../SignInButton";
import { getAuthSession } from "@/lib/auth";
import { SignOutButton } from "../SignOutButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";

type UpperDashboardProps = {};

export const UpperDashboard = async ({}: UpperDashboardProps) => {
  const session = await getAuthSession();
  return (
    <div
      className={clsx(
        "w-[100%] border-b-2 p-4 flex items-center gap-5",
        session?.user ? "justify-between" : "justify-center"
      )}
    >
      {session?.user && <p className="font-semibold text-lg">FlashCards</p>}

      <div className="flex gap-4">
        {session?.user && (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src={session.user.image as string} alt="user" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="border border-foreground mt-[14px] mr-[10px]">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>{session.user.email}</DropdownMenuItem>
                <DropdownMenuItem>{session.user.name}</DropdownMenuItem>
                <DropdownMenuItem>{<SignOutButton />}</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
        <DarkToggle />
      </div>

      <div className="hidden md:flex">
        {!session?.user ? <SignInButton /> : <SignOutButton />}
      </div>
    </div>
  );
};
