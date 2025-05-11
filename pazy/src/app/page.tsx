// app/users/page.tsx
"use client";

import React from "react";
import MRTTable from "@/components/ui/MRTTable"; 
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    primary: {
      main: '#4f46e5',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #333',
        },
      },
    },
  },
});


export default function UsersPage() {
  return (
    <div className="bg-black">
      <ThemeProvider theme={theme}><MRTTable /></ThemeProvider>
      
    </div>
  );
}
