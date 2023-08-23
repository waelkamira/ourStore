import * as React from "react";
import Box from "@mui/material/Box";
import Styles from "./SlidShow.module.css";
import photo1 from "./photos/photo1.jpg";
export default function SlidShow() {
  return (
    <Box className={Styles.box}>
      <img src={photo1} />
    </Box>
  );
}
