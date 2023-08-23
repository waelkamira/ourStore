import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import SelectComponent from "./SelectComponent";
import Styles from "./thirdNavBar.module.css";
export default function ThirdNavBar() {
  return (
    <Box className={Styles.box}>
      <SelectComponent label="كل المنتجات">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="إلكترونيات ">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="موبايلات ">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="كل المنجات">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="كل المنجات">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="كل المنجات">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="كل المنجات">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="كل المنجات">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="كل المنجات">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
      <SelectComponent label="كل المنجات">
        <MenuItem>One</MenuItem>
        <MenuItem>Two</MenuItem>
        <MenuItem>Three</MenuItem>
      </SelectComponent>
    </Box>
  );
}
