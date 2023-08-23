import * as React from "react";
import Box from "@mui/material/Box";
import Styles from "./SlidShow.module.css";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import photo4 from "./photos/photo4.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

export default function SlidShow() {
  return (
    <>
      {/* <Image src={photo1} alt="/" /> */}
      <Slider style={{ color: "white", background: "red" }}>
        {slides.map((slide, index) => (
          <div key={index}>
            <h2>{slide.title}</h2>
            <div>{slide.description}</div>
          </div>
        ))}
      </Slider>
    </>
  );
}
