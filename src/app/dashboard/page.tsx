import { MainConsole } from "@/components/dashboard/MainConsole";
import { UpperDashboard } from "@/components/dashboard/Upper";
import React from "react";

type DashboardPageProps = {};

const DashboardPage = ({}: DashboardPageProps) => {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex flex-col">
        <UpperDashboard />

        <div className="flex-1 w-[100%] flex">
          <MainConsole />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
