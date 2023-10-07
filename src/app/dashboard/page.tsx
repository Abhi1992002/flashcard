"use client";
import { Dashboard } from "@/components/Dashboard";
import React, { useEffect, useState } from "react";

type DashboardPageProps = {};

const DashboardPage = ({}: DashboardPageProps) => {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
