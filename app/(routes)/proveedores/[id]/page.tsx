"use client";
import Provider from "@/app/screens/provider";
import React from "react";

const ProviderPage = ({ params }: { params: { id: string } }) => {
  return <Provider id={params.id} />;
};

export default ProviderPage;
