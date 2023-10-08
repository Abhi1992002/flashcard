import { MainConsole } from "@/components/dashboard/MainConsole";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/db";
import React from "react";

type DashboardPageProps = {};

const DashboardPage = async ({}: DashboardPageProps) => {
  const session = await getAuthSession();
  if (session?.user) {
    const notebook = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
      include: {
        notebooks: true,
      },
    });

    return (
      <>
        <div className="w-screen h-screen overflow-hidden flex flex-col">
          <div className="flex-1 w-[100%] flex">
            <MainConsole notebook={notebook?.notebooks} />
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Signin First</h1>;
  }
};

export default DashboardPage;
