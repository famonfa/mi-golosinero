"use client";
import { Box, CenteredBox } from "@/app/ui-library/ui-components/box/box";

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { Text } from "@/app/ui-library/ui-components/text/text";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import Image from "next/image";
import { palette } from "@/app/ui-library/vanilla.css";
import PutPatchDelete from "../../ui-library/ui-components/putPatchDelete/putPatchDelete";

type Props = {
  data: {
    product: {
      name: string;
      image: string;
      description: string;
      category: string;
      quantityPrices: {
        quantity: number;
        price: number;
      }[];
    };
  };
};

const ProductCard = ({ data }: Props) => {
  const [selectedQuantity, setSelectedQuantity] = useState(
    Math.min(data?.product?.quantityPrices[0].quantity || 0, 10)
  );

  const selectedPrice =
    data?.product?.quantityPrices.find(
      (item: { quantity: number; price: number }) =>
        item.quantity === selectedQuantity
    )?.price || 0;

  return (
    <Stack
      direction="horizontal"
      css={{
        padding: "1em",
        alignItems: "center",
        justifyContent: "space-between",
        alignContent: "center",
        height: "fit-content",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: palette.secondaryBackground,
        width: "65%",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          alignItems: "center",
          flex: 1,
        }}
      >
        {data?.product?.image && (
          <Image
            src={data.product.image}
            alt={data?.product?.name}
            width={100}
            height={100}
            style={{ objectFit: "cover", borderRadius: "100px" }}
          ></Image>
        )}
        <PutPatchDelete product />
      </Box>

      <Stack
        direction="vertical"
        css={{
          width: "100%",
          justifyContent: "space-between",
          gap: 15,
          padding: 10,
          flex: 1,
        }}
      >
        <Box style={{ textAlign: "start" }}>
          <Text variant="h1a">{data?.product?.name}</Text>
          <Text css={{ color: palette.primary }}>
            {data?.product?.description}
          </Text>
        </Box>
        <Stack
          direction="horizontal"
          css={{
            gap: 20,
            alignItems: "center",
            width: "fit-content",
            backgroundColor: palette.primary,
            padding: 10,
            borderRadius: "8px",
          }}
        >
          <FormControl style={{ height: "2em", flex: 3 }}>
            <InputLabel id="selectCategory">Cantidad</InputLabel>
            <Select
              value={selectedQuantity}
              onChange={(e) => setSelectedQuantity(e.target.value as number)}
              style={{ height: "2em" }}
            >
              {data.product.quantityPrices.map(
                (item: { quantity: number; price: number }) => (
                  <MenuItem key={item.quantity} value={item.quantity}>
                    {item.quantity} Unidades
                  </MenuItem>
                )
              )}
            </Select>
          </FormControl>
          <Text variant="h2" css={{ color: palette.primaryDark }}>
            ${selectedPrice}
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductCard;
