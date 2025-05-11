// // components/UserTable.tsx
// "use client";

// import React, { useState } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
//   ColumnDef,
// } from "@tanstack/react-table";
// import {
//   DndContext,
//   closestCenter,
//   PointerSensor,
//   useSensor,
//   useSensors,
// } from "@dnd-kit/core";
// import {
//   arrayMove,
//   SortableContext,
//   useSortable,
//   verticalListSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import { columns } from "@/lib/columns";
// import { details } from "@/components/ui/placeholder_data";

// export default function UserTable() {
//   const [data] = useState(details[0]);
//   const [columnOrder, setColumnOrder] = useState(
//     columns.map((col) => col.accessorKey as string)
//   );

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       columnOrder,
//     },
//     onColumnOrderChange: setColumnOrder,
//     getCoreRowModel: getCoreRowModel(),
//     enableColumnResizing: true,
//     columnResizeMode: "onChange",
//   });

//   const sensors = useSensors(useSensor(PointerSensor));

//   return (
//     <div className="overflow-x-auto rounded-md border border-black">
//       <DndContext
//         sensors={sensors}
//         collisionDetection={closestCenter}
//         onDragEnd={(event) => {
//           const { active, over } = event;
//           if (active.id !== over?.id) {
//             setColumnOrder((prev) => {
//               const oldIndex = prev.indexOf(active.id as string);
//               const newIndex = prev.indexOf(over?.id as string);
//               return arrayMove(prev, oldIndex, newIndex);
//             });
//           }
//         }}
//       >
//         <table className="min-w-full border-collapse">
//           <thead>
//             <SortableContext
//               items={table.getAllLeafColumns().map((col) => col.id)}
//               strategy={verticalListSortingStrategy}
//             >
//               {table.getHeaderGroups().map((headerGroup) => (
//                 <tr key={headerGroup.id}>
//                   {headerGroup.headers.map((header) => {
//                     const { attributes, listeners, setNodeRef, transform, transition } =
//                       useSortable({ id: header.column.id });
//                     const style = {
//                       transform: CSS.Transform.toString(transform),
//                       transition,
//                       width: header.getSize(),
//                     };
//                     return (
//                       <th
//                         key={header.id}
//                         ref={setNodeRef}
//                         style={style}
//                         {...attributes}
//                         {...listeners}
//                         className="border-b px-4 py-2 text-left"
//                       >
//                         {header.isPlaceholder
//                           ? null
//                           : flexRender(header.column.columnDef.header, header.getContext())}
//                         {header.column.getCanResize() && (
//                           <div
//                             onMouseDown={header.getResizeHandler()}
//                             onTouchStart={header.getResizeHandler()}
//                             className={`absolute right-0 top-0 h-full w-1 cursor-col-resize ${
//                               header.column.getIsResizing() ? "bg-blue-500" : ""
//                             }`}
//                           />
//                         )}
//                       </th>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </SortableContext>
//           </thead>
//           <tbody>
//             {table.getRowModel().rows.map((row) => (
//               <tr key={row.id}>
//                 {row.getVisibleCells().map((cell) => (
//                   <td key={cell.id} className="border-b px-4 py-2">
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </DndContext>
//     </div>
//   );
// }
