// SimpleTable.tsx
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  ColumnDef,
} from "@tanstack/react-table";
import { useState, useEffect, Dispatch } from "react";
import * as classNames from "./Table.css";
import { Button } from "../../ui-library/ui-components/button/button";
import { Box } from "@/app/ui-library/ui-components/box/box";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import {
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Stack } from "@/app/ui-library/ui-components/stack/stack";
import { LinkNext } from "@/app/ui-library/ui-components/link/link";
import { palette } from "@/app/ui-library/vanilla.css";

type TableProps = {
  data: any[];
  columns: ColumnDef<any, any>[];
  setItemId: Dispatch<React.SetStateAction<string>>;
};

function SimpleTable({ data, columns, setItemId }: TableProps) {
  const [filteredData, setFilteredData] = useState(data);
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const pathname = usePathname();
  console.log(pathname);

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
  });

  useEffect(() => {
    let newFilteredData = data;
    if (categoryFilter) {
      if (categoryFilter === "noFilter") {
        setCategoryFilter("");
        return;
      }
      newFilteredData = newFilteredData.filter(
        (item: { category: string }) => item.category === categoryFilter
      );
    }
    if (filtering) {
      newFilteredData = newFilteredData.filter(
        (item: { name: string }) =>
          item.name.toLowerCase().includes(filtering.toLowerCase()) || false
      );
    }
    setFilteredData(newFilteredData);
  }, [categoryFilter, filtering, data]);

  return (
    <div className={classNames.container}>
      <Box>
        <Stack
          direction="horizontal"
          css={{
            justifyContent: "space-between",
            alignItems: "center",
            gap: 10,
            width: "100%",
          }}
        >
          <Input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            className={classNames.input}
            placeholder="Buscar..."
          />

          <FormControl fullWidth>
            {/* <InputLabel id="selectCategory">Filtrar por Categoría</InputLabel> */}
            <Select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              labelId="selectCategory"
              variant="standard"
            >
              <MenuItem value="" disabled>
                Filtrar por Categoría
              </MenuItem>

              {data.map((item) => (
                <MenuItem key={item.category} value={item.category}>
                  {item.category}
                </MenuItem>
              ))}
              <MenuItem value="noFilter">Eliminar filtros</MenuItem>
            </Select>
          </FormControl>
        </Stack>

        <Box className={classNames.scrollBox}>
          <table className={classNames.table}>
            <thead
              style={{
                position: "sticky",
                top: 0,
              }}
            >
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id} className={classNames.th}>
                  {headerGroup.headers.map((header) => (
                    <th
                      className={classNames.th}
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                      style={{
                        cursor: "pointer",
                        padding: "8px",
                        // backgroundColor: "#162c46",
                        backgroundColor: "#071a2b",
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}

                          {
                            { asc: "⬆️", desc: "⬇️" }[
                              header.column.getIsSorted() ?? null
                            ]
                          }
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody
              style={{
                overflow: "scroll",
                maxHeight: "20dvh",
              }}
            >
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id} className={classNames.tr}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      style={{
                        padding: "5px",
                        height: "50px",
                        cursor: "pointer",
                        fontWeight:
                          cell.column.id === "name" ? "bold" : "normal",
                      }}
                    >
                      {cell.column.id === "name" ? (
                        <LinkNext
                          css={{
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            color: palette.primaryText,
                          }}
                          href={`${pathname}/${row.original.id}`}
                        >
                          {data.find((d) => d.id === row.original.id).image && (
                            <Image
                              src={
                                data.find((d) => d.id === row.original.id).image
                              }
                              alt={row.original.name}
                              width={50}
                              height={50}
                              style={{
                                objectFit: "cover",
                                borderRadius: "50%",
                              }}
                            />
                          )}
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </LinkNext>
                      ) : (
                        flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            <tfoot>
              {table.getFooterGroups().map((footerGroup) => (
                <tr key={footerGroup.id}>
                  {footerGroup.headers.map((footer) => (
                    <th key={footer.id}>
                      {flexRender(
                        footer.column.columnDef.footer,
                        footer.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </tfoot>
          </table>
        </Box>
      </Box>
      {/* <CustomPagination table={table} /> */}
    </div>
  );
}

export default SimpleTable;
