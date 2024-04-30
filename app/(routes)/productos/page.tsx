"use client";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS, GET_USERS } from "../../queries";
import { Text } from "../../ui-library/ui-components/text/text";
import { Box } from "../../ui-library/ui-components/box/box";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import Table from "../../ui-library/ui-components/table/Table";
import { container } from "../../ui-library/vanilla.css";
// import Products from "../../components/products/Product";
import { wrap } from "module";
import ElementNotFound from "@/app/ui-library/ui-components/error/ElementNotFound";

export default function Productos({ params }: { params: { url: string } }) {
  const [itemId, SetItemId] = useState("");
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  const dataSource = useMemo(() => data?.products || [], [data]);
  const columns: ColumnDef<unknown, any>[] = useMemo(
    () => [
      {
        header: "ID",
        accessorKey: "id",
      },
      {
        header: "Nombre",
        accessorKey: "name",
      },
      {
        header: "Categoría",
        accessorKey: "category",
      },
    ],
    []
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box className={container}>
      <Text variant="h1">Productos</Text>
      <Box
        css={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "90%",
          gap: "1em",
        }}
      >
        <Table columns={columns} data={dataSource} setItemId={SetItemId} />
      </Box>
    </Box>
  );
}
