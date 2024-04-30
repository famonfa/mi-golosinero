import { Box } from "@/app/ui-library/ui-components/box/box";
import { Text } from "@/app/ui-library/ui-components/text/text";
import React from "react";
import { gridStats, stats } from "./products.css";
import { palette } from "@/app/ui-library/vanilla.css";

const ProductStats = () => {
  const productStats = [
    {
      id: 1,
      name: "Cantidad de unidades vendidas",
      style: {
        backgroundColor: palette.primary,
        fontSize: "15px",
        flexDirection: "column",
        flex: "1",
        padding: "7px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-around",
        maxWidth: "200px",
      },
    },
    {
      id: 2,
      name: "Cantidad de unidades vendidas",
      style: {
        backgroundColor: palette.primary,
        fontSize: "15px",
        flexDirection: "column",
        flex: "1",
        padding: "7px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-around",
        maxWidth: "200px",
      },
    },
    {
      id: 3,
      name: "Cantidad de unidades vendidas",
      style: {
        backgroundColor: palette.primary,
        fontSize: "15px",
        flexDirection: "column",
        flex: "1",
        padding: "7px",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-around",
        maxWidth: "200px",
      },
    },
    {
      id: 4,
      name: "Cantidad de unidades vendidas",
      style: {
        backgroundColor: palette.primary,
        fontSize: "15px",
        flexDirection: "column",
        flex: "1",
        padding: "7px",
        borderRadius: "8px",
        display: "flex",
        maxWidth: "200px",
        justifyContent: "space-around",
      },
    },
  ];
  return (
    <Box className={stats}>
      {productStats.map((item) => (
        <Box key={item.id} css={item.style}>
          <Text css={{ width: "100%" }}>{item.name}</Text>
          <Text variant="h1">$100000</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ProductStats;
