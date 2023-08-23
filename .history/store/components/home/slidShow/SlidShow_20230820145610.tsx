import * as React from "react";
import Box from "@mui/material/Box";
import Styles from "./SlidShow.module.css";
import photo1 from "./photos/photo1.jpg";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "components/ExampleCarouselImage";

export default function SlidShow() {
  return (
    <Box className={Styles.box}>{/* <Image src={photo1} alt="/" /> */}</Box>
  );
}
