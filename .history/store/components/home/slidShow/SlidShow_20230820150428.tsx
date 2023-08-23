import * as React from "react";
import Box from "@mui/material/Box";
import Styles from "./SlidShow.module.css";
import photo1 from "./photos/photo1.jpg";
import Image from "next/image";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "components/ExampleCarouselImage";

export default function SlidShow() {
  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  return (
    <Box className={Styles.box}>
      <Image src={photo1} alt="/" />
      
    </Box>
  );
}
