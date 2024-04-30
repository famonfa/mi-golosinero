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
    product: {
      stocks: {
        quantity: number;
        units: number;
      }[];
    };
  };
  setShowOptions: Dispatch<React.SetStateAction<null | number>>;
  showOptions?: null | number;
};

const ProductStock = ({
  data,
  setShowOptions,
  showOptions,
}: ProductStockProps) => {
  const dataSource = useMemo(() => data?.product.stocks || [], [data]);

  const columns: ColumnDef<unknown, any>[] = useMemo(
    () => [
      {
        header: "Unidades por caja",
        accessorKey: "quantity",
      },
      {
        header: "Stock",
        accessorKey: "units",
      },
    ],
    []
  );

  if (!data.product.stocks.length) return null;

  return (
    <>
      <Stack
        direction="horizontal"
        css={{
          width: "35%",
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
            columns={columns}
            data={dataSource}
            setShowOptions={setShowOptions}
          />
        </Box>
        <Box
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <PutPatchDelete column create showOptions={showOptions} />
        </Box>
      </Stack>
    </>
  );
};

export default ProductStock;
