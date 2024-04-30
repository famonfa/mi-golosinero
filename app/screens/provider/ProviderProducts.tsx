import { Box } from "@/app/ui-library/ui-components/box/box";
import { ColumnDef } from "@tanstack/react-table";
import React, { Dispatch, useMemo } from "react";
import SmallTable from "../../ui-library/ui-components/table/SmallTable";
import PutPatchDelete from "../../ui-library/ui-components/putPatchDelete/putPatchDelete";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import { palette } from "@/app/ui-library/vanilla.css";
import { Button } from "@/app/ui-library/ui-components/button/button";

type ProductStockProps = {
  data: {
    provider: {
      productPrices: {
        price: number;
        quantity: number;
        product: {
          name: string;
        };
      }[];
    };
  };
  setShowOptions: Dispatch<React.SetStateAction<null | number>>;
  showOptions?: null | number;
};

const ProviderProducts = ({
  data,
  setShowOptions,
  showOptions,
}: ProductStockProps) => {
  const dataSource = useMemo(() => data?.provider.productPrices || [], [data]);

  const columns: ColumnDef<unknown, any>[] = useMemo(
    () => [
      {
        header: "Producto",
        accessorKey: "product.name",
      },
      {
        header: "Unidades por caja",
        accessorKey: "quantity",
      },
      {
        header: "Precio",
        accessorKey: "price",
      },
    ],
    []
  );
  if (!data?.provider.productPrices.length) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        css={{
          width: "45%",
          marginTop: "1em",
          gap: "10px",
          backgroundColor: palette.secondaryBackground,
          padding: "1em",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <Box css={{ flex: 3 }}>
          <SmallTable
            setShowOptions={setShowOptions}
            columns={columns}
            data={dataSource}
          />
        </Box>
        {/* <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <PutPatchDelete column create showOptions={showOptions} />
        </Box> */}
      </Stack>
    </>
  );
};

export default ProviderProducts;
