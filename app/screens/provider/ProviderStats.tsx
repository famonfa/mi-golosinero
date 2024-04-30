import { Box } from "@/app/ui-library/ui-components/box/box";
import { Text } from "@/app/ui-library/ui-components/text/text";
import React from "react";
import { gridStats, stats } from "./Provider.css";

const ProductStats = () => {
  const productStats = [
    {
      id: 1,
      name: "Cantidad de unidades vendidas",
    },
    {
      id: 2,
      name: "Cantidad de unidades vendidas",
    },
    {
      id: 3,
      name: "Cantidad de unidades vendidas",
    },
    {
      id: 4,
      name: "Cantidad de unidades vendidas",
    },
  ];
  return (
    <Box className={gridStats}>
      {productStats.map((item) => (
        <Box key={item.id} className={stats}>
          <Text css={{ width: "100%" }}>{item.name}</Text>
          <Text variant="h1">$100000</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ProductStats;
