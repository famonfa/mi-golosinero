"use client";
import { Box, CenteredBox } from "@/app/ui-library/ui-components/box/box";

import React, { useState } from "react";
import { Text } from "@/app/ui-library/ui-components/text/text";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import { palette } from "@/app/ui-library/vanilla.css";
import PutPatchDelete from "@/app/ui-library/ui-components/putPatchDelete/putPatchDelete";

type Props = {
  data: {
    provider: {
      name: string;
      address: string;
      neighborhood: string;
      phone: string;
    };
  };
};

const ProviderCard = ({ data }: Props) => {
  return (
    <Stack
      direction="vertical"
      css={{
        padding: "1em",
        marginTop: "1em",
        justifyContent: "space-between",
        alignContent: "center",
        height: "fit-content",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: palette.secondaryBackground,
        width: "45%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 15,
          flex: 1,
        }}
      >
        <Text variant="h1a">{data?.provider?.name}</Text>
        <PutPatchDelete product />
      </Box>
      <Text variant="h3">{data?.provider?.phone}</Text>
      <Text variant="h3">{data?.provider?.address}</Text>
      <Text variant="h3">{data?.provider?.neighborhood}</Text>
    </Stack>
  );
};

export default ProviderCard;
