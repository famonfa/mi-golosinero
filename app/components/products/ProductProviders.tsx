import { Box } from "@/app/ui-library/ui-components/box/box";
import { Text } from "@/app/ui-library/ui-components/text/text";
import { palette } from "@/app/ui-library/vanilla.css";
import { Tooltip } from "@mui/material";
import React from "react";

const ProductProviders = ({ data }: any) => {
  return (
    <Box
      css={{
        width: "50%",
        backgroundColor: palette.secondaryBackground,
        padding: "1em",
        borderRadius: "12px",
      }}
    >
      <Text variant="h3">Proveedores de este producto</Text>
      <Box
        css={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginTop: "1em",
          borderRadius: "12px",
        }}
      >
        {data?.product.productPrices.map(
          (item: { provider: { name: string } }, index: number) => (
            <Tooltip
              key={index}
              title={
                <>
                  <h1>{item.provider.name}</h1>
                </>
              }
            >
              <div
                style={{
                  backgroundColor: palette.primary,
                  padding: "1em",
                  borderRadius: "8px",
                }}
              >
                <Text>{item.provider.name}</Text>
              </div>
            </Tooltip>
          )
        )}
      </Box>
    </Box>
  );
};

export default ProductProviders;
