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
      <div ref={sliderRef} className="keen-slider">
        <Image
          src={photo1}
          alt="/"
          className={`keen-slider__slide numberSlide1 ${Styles.photo}`}
        />
        <Image
          src={photo2}
          alt="/"
          className={`keen-slider__slide numberSlide2  ${Styles.photo}`}
        />
        <Image
          src={photo3}
          alt="/"
          className={`keen-slider__slide numberSlide3 ${Styles.photo} `}
        />
        <Image
          src={photo4}
          alt="/"
          className={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo5}
          alt="/"
          className={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo6}
          alt="/"
          className={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo7}
          alt="/"
          className={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo8}
          alt="/"
          className={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
        <Image
          src={photo9}
          alt="/"
          className={`keen-slider__slide numberSlide4  ${Styles.photo}`}
        />
      </div>
    </Box>
  );
}
