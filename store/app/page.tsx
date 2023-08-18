"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime, purple } from "@mui/material/colors";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    primary: {
      main: "#62D0B6",
    },
    secondary: {
      main: "#333333",
    },
    warning: {
      main: "#FFAF44",
    },
    error: {
      main: "#F55157",
    },
    success: {
      main: "#00AF6C",
    },
    info: {
      main: "#5196F3",
    },
  },
});

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Button variant="contained" >Primary</Button>

        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
      </main>
    </ThemeProvider>
  );
}
