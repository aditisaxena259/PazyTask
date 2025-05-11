// columns.tsx
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Detail } from "@/lib/definitions";

export const columns: ColumnDef<Detail>[] = [
  {
    accessorKey: "avatar",
    header: "Avatar",
    cell: ({ row }) => {
      const src = row.getValue("avatar") as string;
      return (
        <Image
          src={src}
          alt="Avatar"
          width={32}
          height={32}
          className="rounded-full"
        />
      );
    },
    size: 100,
  },
  {
    accessorKey: "name",
    header: "Name",
    meta: {
      primary: true,
    },
    size: 150,
  },
  {
    accessorKey: "description",
    header: "Description",
    size: 200,
  },
  {
    accessorKey: "amount",
    header: "Amount",
    size: 100,
  },
  {
    accessorKey: "tooltip",
    header: "Tooltip",
    size: 200,
  },
];
