import { MainConsole } from "@/components/dashboard/MainConsole";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import React from "react";

type DashboardPageProps = {};

const DashboardPage = async ({}: DashboardPageProps) => {
  const session = await getAuthSession();
  if (session?.user) {
    return (
      <>
        <div className="w-screen h-[calc(100vh-80px)] overflow-hidden flex flex-col">
          <div className="flex-1 w-[100%] flex">
            <MainConsole id={session.user.id} />
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Signin First</h1>;
  }
};

export default DashboardPage;
