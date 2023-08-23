import * as React from "react";
import Container from "@mui/material/Container";
import SelectComponent from "./SelectComponent";
import Styles from "./thirdNavBar.module.css";
export default function ThirdNavBar() {
  return (
    <div
      style={{
        textAlign: "center",
        background: "black",
        width: "100%",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
    >
      <Container>
      <SelectComponent label="كل المنتجات">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="إلكترونيات">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="موبايلات">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="كميرات مراقبة">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="سماعات رقمية">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="كميرات رقمية">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="إكسسوارات">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="شاشات كمبيوتر">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="أدوات منزلية ">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      <SelectComponent label="سماعات ">
        <option>منتج 1</option>
        <option>منتج 2</option>
        <option>منتج 3</option>
      </SelectComponent>
      </Container>
    </div>
  );
}
