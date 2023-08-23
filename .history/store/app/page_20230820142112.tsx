"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopHeader from "../components/topHeaderNav/topHeader";
import Container from "@mui/material/Container";
import HomePage from "./home/page";
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
      <Container maxWidth="lg">
        <TopHeader />
        <HomePage />
      </Container>
    </ThemeProvider>
  );
}
