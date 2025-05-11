import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
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
