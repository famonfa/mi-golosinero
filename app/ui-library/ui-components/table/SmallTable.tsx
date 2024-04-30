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
import { useState, Dispatch } from "react";
import * as classNames from "./Table.css";
import { Box } from "@/app/ui-library/ui-components/box/box";
import { Text } from "@/app/ui-library/ui-components/text/text";
import { usePathname } from "next/navigation";

type TableProps = {
  data: any[];
  columns: ColumnDef<any, any>[];
  setShowOptions: Dispatch<React.SetStateAction<null | number>>;
};

function SimpleTable({ data, columns, setShowOptions }: TableProps) {
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
  });

  console.log(data);

  return (
    <div>
      <Box className={classNames.scrollBoxMini}>
        <table className={classNames.table}>
          <thead style={{ position: "sticky", top: 0 }}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className={classNames.th}>
                {headerGroup.headers.map((header) => (
                  <th
                    className={classNames.th}
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    style={{
                      cursor: "pointer",
                      padding: "5px",
                      backgroundColor: "#071a2b",
                    }}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody style={{ overflow: "scroll" }}>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={classNames.tr}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    onClick={() => setShowOptions(row.original.id)}
                    style={{
                      padding: "5px",
                      height: "50px",
                      cursor: "pointer",
                      fontWeight: cell.column.id === "name" ? "bold" : "normal",
                    }}
                  >
                    <Text variant="h2">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </Text>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}

export default SimpleTable;
