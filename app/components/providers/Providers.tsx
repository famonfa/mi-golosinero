"use client";
import { Box } from "@/app/ui-library/ui-components/box/box";
import React, { useState } from "react";
import { container, containerInfo, inputInfo } from "./Providers.css";
import { Input, LinearProgress } from "@mui/material";
import ElementNotFound from "../../ui-library/ui-components/error/ElementNotFound";
import { useQuery } from "@apollo/client";
import { GET_PROVIDER } from "@/app/queries";

const Providers = ({ providerId }: { providerId: string }) => {
  const id = parseInt(providerId);

  const { data, loading, error } = useQuery(GET_PROVIDER, {
    variables: { id },
  });

  if (loading)
    return (
      <Box
        style={{
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LinearProgress />
      </Box>
    );
  if (error)
    return (
      <Box style={{ width: "60%" }}>
        <ElementNotFound element="proveedor" />
      </Box>
    );

  console.log(data);

  return <Box className={container}></Box>;
};

export default Providers;
