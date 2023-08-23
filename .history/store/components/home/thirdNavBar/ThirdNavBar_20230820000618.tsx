import * as React from "react";
import Box from "@mui/material/Box";
import SelectComponent from "./SelectComponent";
import Styles from "./thirdNavBar.module.css";
export default function ThirdNavBar() {
  return (
    <Box className={Styles.box}>
      <SelectComponent label="كل المنتجات">
        <a>One</a>
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="إلكترونيات">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="موبايلات">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="كميرات مراقبة">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="سماعات رقمية">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="كميرات رقمية">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="إكسسوارات">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="شاشات كمبيوتر">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="أدوات منزلية ">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
      <SelectComponent label="سماعات ">
        <a>One</a>
        <a>Two</a>
        <a>Three</a>
      </SelectComponent>
    </Box>
  );
}
