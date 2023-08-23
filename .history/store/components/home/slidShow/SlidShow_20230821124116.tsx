import * as React from "react";
import Box from "@mui/material/Box";
import Styles from "./SlidShow.module.css";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import photo4 from "./photos/photo4.jpg";
import photo5 from "./photos/photo5.jpg";
import photo6 from "./photos/photo6.jpg";
import photo7 from "./photos/photo7.jpg";
import photo8 from "./photos/photo8.jpg";
import photo9 from "./photos/photo9.jpg";
import Image from "next/image";

import Carousel from "react-bootstrap/Carousel";

export default function SlidShow() {
  return (
    // <Box style={{ color: "white", height: "10rem" }}>

    <Carousel>
      <Carousel.Item>
        <Image src={photo1} alt="/" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={photo2} alt="/" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={photo3} alt="/" />
      </Carousel.Item>
    </Carousel>

    // </Box>`
  );
}
