import * as React from "react";
import Box from "@mui/material/Box";
import Styles from "./SlidShow.module.css";
export default function SlidShow() {
  return (
    <Box className={Styles.box}>
      <img src="./photos/photo1.jpg" />
    </Box>
  );
}
