"use client";
import { useQuery } from "@apollo/client";
import { GET_PROVIDERS } from "../../queries";
import { Card } from "../../ui-library/ui-components/card/card";
import { Text } from "../../ui-library/ui-components/text/text";
import { Box } from "../../ui-library/ui-components/box/box";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import Table from "../../ui-library/ui-components/table/Table";
import { container } from "../../ui-library/vanilla.css";

export default function Proveedores({ params }: { params: { url: string } }) {
  const [itemId, setItemId] = useState("");
  const { loading, error, data } = useQuery(GET_PROVIDERS);

  const dataSource = useMemo(() => data?.providers || [], [data]);
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
        header: "Teléfono",
        accessorKey: "phone",
      },
      {
        header: "Barrio",
        accessorKey: "neighborhood",
      },
      {
        header: "Dirección",
        accessorKey: "address",
      },
    ],
    []
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box className={container}>
      <Text variant="h1">Proveedores</Text>
      <Box
        css={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "90%",
          gap: "1em",
        }}
      >
        <Table columns={columns} data={dataSource} setItemId={setItemId} />
        {/* <Providers providerId={itemId} /> */}
      </Box>
    </Box>
  );
}
