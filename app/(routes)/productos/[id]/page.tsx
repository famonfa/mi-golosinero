"use client";
import { GET_PRODUCT } from "@/app/queries";
import { Box } from "@/app/ui-library/ui-components/box/box";
import { useQuery } from "@apollo/client";
import { LinearProgress } from "@mui/material";
import React, { useContext, useState } from "react";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import ElementNotFound from "../../../ui-library/ui-components/error/ElementNotFound";
import { useParams } from "next/navigation";
import ProductCard from "@/app/components/products/ProductCard";
import ProductStats from "@/app/components/products/ProductStats";
import ProductProviders from "@/app/components/products/ProductProviders";
import ProductStock from "@/app/components/products/ProductStock";
import { IconContext } from "@/app/ui-library/ui-components/putPatchDelete/putPatchDeleteContext";
import {
  ModalEditProduct,
  ModalDelete,
} from "@/app/components/products/Modals";
import ItemBar from "@/app/components/itemBar/ItemBar";
import { Button } from "@/app/ui-library/ui-components/button/button";

const Product = () => {
  const { id } = useParams();
  const [showOptions, setShowOptions] = useState(null as null | number);
  const iconContext = useContext(IconContext);
  const { iconSelected } = iconContext || {};

  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { id },
  });

  if (loading)
    return (
      <Box
        style={{
          width: "100%",
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
      <Box style={{ width: "100%" }}>
        <ElementNotFound element="producto" />
      </Box>
    );

  const itemBarButtons = [
    {
      addStock:
        data.product.stocks.length === 0 ? (
          <Button size="tiny">+ Stock</Button>
        ) : null,
    },
  ];

  return (
    <Box>
      <ItemBar
        category={data.product.category}
        name={data.product.name}
        buttonArray={itemBarButtons}
      />
      <Stack direction="vertical" css={{ width: "100%" }}>
        <Box>
          <ProductStats />
          <Box
            css={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginBottom: "1em",
              width: "100%",
            }}
          >
            <ProductCard data={data} />

            <ProductStock
              data={data}
              setShowOptions={setShowOptions}
              showOptions={showOptions}
            />
          </Box>

          <Box
            css={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            {data.product.productPrices.length > 0 && (
              <ProductProviders data={data} />
            )}
          </Box>
        </Box>
      </Stack>

      {iconSelected === "EDIT_PRODUCT" && <ModalEditProduct data={data} />}
      {iconSelected === "DELETE_PRODUCT" && (
        <ModalDelete id={data.product.id} css={{ padding: 25 }} />
      )}
    </Box>
  );
};

export default Product;
