import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4285F4', // Google blue
    },
    secondary: {
      main: '#34A853', // Google green
    },
    background: {
      default: '#f8f9fa',
    },
  },
  typography: {
    fontFamily: '"Google Sans", Roboto, Arial, sans-serif',
  },
});