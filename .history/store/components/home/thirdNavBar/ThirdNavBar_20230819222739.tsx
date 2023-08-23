import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import SelectComponent from "./SelectComponent";
import Styles from "./thirdNavBar.module.css";
export default function ThirdNavBar() {
  return (
    <Box className={Styles.box}>
      <SelectComponent label="كل المنتجات">
        <option>One</option>
        <option>One</option>
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="إلكترونيات">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="موبايلات">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="كميرات مراقبة">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="سماعات رقمية">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="كميرات رقمية">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="إكسسوارات">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="شاشات كمبيوتر">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="أدوات منزلية ">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
      <SelectComponent label="سماعات ">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </SelectComponent>
    </Box>
  );
}
