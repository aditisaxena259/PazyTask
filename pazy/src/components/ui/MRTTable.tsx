import React, { useMemo, useState } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { Box, Button } from '@mui/material';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Detail } from '@/lib/definitions';
import { details } from '@/components/ui/placeholder_data';
import * as XLSX from 'xlsx';
import { useEffect } from 'react';
import axios from 'axios';
import { Skeleton } from '@mui/material';
function TableSkeleton() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bgcolor: '#121212',
        zIndex: 1300,
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        overflow: 'hidden',
      }}
    >
      <Skeleton
        variant="rectangular"
        height={40}
        width="30%"
        sx={{ bgcolor: '#2c2c2c', borderRadius: 2 }}
      />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          overflowY: 'auto',
        }}
      >
        {[...Array(10)].map((_, rowIndex) => (
          <Box key={rowIndex} display="flex" gap={2}>
            {[...Array(6)].map((_, colIndex) => (
              <Skeleton
                key={colIndex}
                variant="rectangular"
                height={36}
                sx={{
                  flex: 1,
                  bgcolor: '#2c2c2c',
                  borderRadius: 1,
                }}
              />
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

const exportToXLSX = (data: Detail[]) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, 'table_export.xlsx');
};

export default function AdvancedUserTable() {
  const [columnOrder, setColumnOrder] = useState<string[]>([]);
  const [columnSizing, setColumnSizing] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [configLoaded, setConfigLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:3001/api/table-settings').then((res) => {
      setColumnOrder(res.data.columnOrder || []);
      setColumnSizing(res.data.columnSizing || {});
      setRowSelection(res.data.rowSelection || {});
      setConfigLoaded(true);
    });
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => {
      axios.post('http://localhost:3001/api/table-settings', {
        columnOrder,
        columnSizing,
        rowSelection,
      });
    }, 500); 
  
    return () => clearTimeout(timeout);
  }, [columnOrder, columnSizing, rowSelection]);
  
  

  const columns = useMemo<MRT_ColumnDef<Detail>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 150,
        enableColumnOrdering: false,
        enableResizing: false,
        enableSorting: false,
        enableHiding: false,
        muiTableHeadCellProps: {
          sx: {
            position: 'sticky',
            left: 56,
            zIndex: 2,
            backgroundColor: '#0000',
          },
        },
        muiTableBodyCellProps: {
          sx: {
            position: 'sticky',
            left: 56,
            backgroundColor: '#0000',
            zIndex: 1,
          },
        },
      },
      {
        accessorKey: 'avatar',
        header: 'Avatar',
        size: 100,
        Cell: ({ row }) => (
          <img
            src={row.original.avatar}
            alt={row.original.name}
            className="h-8 w-8 rounded-full object-cover"
          />
        ),
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 300,
        enableColumnOrdering: true,
        enableSorting: false,
        
      },
      {
        accessorKey: 'description',
        header: 'Description',
        size: 250,
        enableColumnOrdering: true,
        enableSorting: false,
      },
      {
        accessorKey: 'amount',
        header: 'Amount',
        size: 200,
        enableSorting: true,
        
      },
      {
        accessorKey: 'tooltip',
        header: 'Tooltip',
        size: 300,
        cell: ({ row }) => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-blue-600 underline cursor-pointer">
                Hover
              </TooltipTrigger>
              <TooltipContent>
                <p>{row.original.tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ),
        enableSorting: false,
      },
    ],
    []
  );
  if (!configLoaded) return <TableSkeleton />;

  return (
    <Box className="overflow-x-auto rounded-md border bg-black p-4 shadow" sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      p: 2,
      backgroundColor: '#121212', // or any theme bg
      zIndex: 1300,
      overflow: 'hidden',
    }}>
      <MaterialReactTable
        columns={columns}
        data={details[0]}
        enableColumnOrdering
        enableColumnResizing
        columnResizeMode="onEnd"
        enableRowSelection
        onColumnOrderChange={setColumnOrder}
        onColumnSizingChange={setColumnSizing}
        onRowSelectionChange={setRowSelection}
        state={{
          columnOrder,
          columnSizing,
          rowSelection,
        }}
        
        enablePagination
        
        
        muiTableBodyRowProps={{
          sx: {
            '&:hover': {
              backgroundColor: '#f9fafb',
            },
          },
        }}
        enableStickyHeader
        initialState={{
          pagination: { pageSize: 8, pageIndex: 0 },
          columnPinning: { left: ['mrt-row-select', 'id'] },
        }}
        muiSelectCheckboxProps={{
          sx: {
            position: 'sticky',
            left: 0,
            zIndex: 3,
            backgroundColor: '#121212',
          },
        }}
        
      
        // Render custom actions at the bottom of the table
        renderBottomToolbarCustomActions={({ table }) => (
          <Box sx={{ display: 'flex', gap: 2, }}>
            <Button
              onClick={() => setRowSelection({})} // Clear row selection
              color="error"
              variant="outlined"
            >
              Clear All
            </Button>
            <Button
            onClick={() =>
              exportToXLSX(table.getRowModel().rows.map((row) => row.original))
            }
            color="primary"
            variant="contained"
          >
            Export as .xlsx
          </Button>
        </Box>
        )}
        
      />
    </Box>
  );
}
