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

  return (
    <div style={{ color: "white" }}>
      <Image src={photo1} alt="/" />
      <h1>hwll</h1>
      <div ref={sliderRef} className="keen-slider">
        <div className={"keen-slider__slide numberSlide1"}>
          <Image src={photo1} alt="/" />
        </div>
        <div className="keen-slider__slide numberSlide2">
          <Image src={photo2} alt="/" />
        </div>
        <div className="keen-slider__slide numberSlide3">3</div>
        <div className="keen-slider__slide numberSlide4">4</div>
        <div className="keen-slider__slide numberSlide5">5</div>
        <div className="keen-slider__slide numberSlide6">6</div>
      </div>
    </div>
  );
}
