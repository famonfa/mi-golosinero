"use client";
import React from "react";
import { IconProvider } from "./ui-library/ui-components/putPatchDelete/putPatchDeleteContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <IconProvider>{children}</IconProvider>;
};

export default Providers;
