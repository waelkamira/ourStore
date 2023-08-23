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
  }
  return (
    <Box className={Styles.box}>
      <Image src={photo1} alt="/" />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Box>
  );
}
