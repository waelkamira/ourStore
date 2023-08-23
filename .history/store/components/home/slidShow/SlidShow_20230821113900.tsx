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
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { Carousel } from "@material-tailwind/react";

export default function SlidShow() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  2;
  return (
    <Box style={{ color: "white", height: "10rem" }}>
      {/* <div ref={sliderRef} classNameName="keen-slider">
        <Image
          src={photo1}
          alt="/"
          classNameName={`keen-slider__slide numberSlide1 ${Styles.photo}`}
        />
        <Image
          src={photo2}
          alt="/"
          classNameName={`keen-slider__slide numberSlide2  ${Styles.photo}`}
        />
        <Image
          src={photo3}
          alt="/"
          classNameName={`keen-slider__slide numberSlide3 ${Styles.photo} `}
        />
        <Image
          src={photo4}
          alt="/"
          classNameName={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo5}
          alt="/"
          classNameName={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo6}
          alt="/"
          classNameName={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo7}
          alt="/"
          classNameName={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo8}
          alt="/"
          classNameName={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo9}
          alt="/"
          classNameName={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
      </div> */}

      <Carousel className="rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </Box>
  );
}
