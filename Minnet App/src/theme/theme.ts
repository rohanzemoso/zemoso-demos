import { createTheme } from "@mui/material";

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    '100'?: string;
    '200'?: string;
  }
}


export const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
      light: "rgba(52, 52, 70, 1)",
      "100": "rgba(32, 176, 63, 1)",
      "200": "rgba(183, 26, 51, 1)"
    },
    secondary: {
      main: "rgba(52, 52, 70, 1)",
      light: "rgba(125, 125, 137, 1)",
    },
    background:{
        default:'rgba(196, 196, 196, 0.2)'
    }
  },
  typography: {
    fontFamily: "Graphik",
    h1: {
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: "500"
    },
    h2: {
      fontSize: "12px",
      lineHeight: "14px",
      fontWeight: "400"
    },
    h3: {
      fontSize: "16px",
      lineHeight: "22px",
      fontWeight: "400"
    }
  },
  spacing:4
});