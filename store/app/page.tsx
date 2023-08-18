"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TopHeader from '../components/topHeaderNav/topHeader'
import Container from "@mui/material/Container";

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
    <Container>
      <TopHeader />
      {/* <ThemeProvider theme={theme}>
        <main>
          <Button variant="contained">Primary</Button>

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
      </ThemeProvider> */}
    </Container>
  );
}
