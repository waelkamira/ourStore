import * as React from "react";
import Box from "@mui/material/Box";
import Styles from "./SlidShow.module.css";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import photo4 from "./photos/photo4.jpg";
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
          className={"keen-slider__slide numberSlide1"}
          style={{ height: "15rem" }}
        />
        <Image
          src={photo2}
          alt="/"
          className={"keen-slider__slide numberSlide2"}
        />
        <Image
          src={photo3}
          alt="/"
          className={"keen-slider__slide numberSlide3"}
        />
        <Image
          src={photo4}
          alt="/"
          className={"keen-slider__slide numberSlide4"}
        />
        <div className={"keen-slider__slide numberSlide1"}>hello</div>
        <div className="keen-slider__slide numberSlide2">2</div>
        <div className="keen-slider__slide numberSlide3">3</div>
        <div className="keen-slider__slide numberSlide4">4</div>
        <div className="keen-slider__slide numberSlide5">5</div>
        <div className="keen-slider__slide numberSlide6">6</div>
      </div>
    </Box>
  );
}
