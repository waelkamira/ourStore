"use client";
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
import { Carousel } from "flowbite-react";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "store/components/home/slidShow/style.css";

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
    <div>
      <div ref={sliderRef} className="keen-slider">
        <Image
          src={photo1}
          alt="/"
          className="keen-slider__slide number-slide1"
        />
        <Image
          src={photo2}
          alt="/"
          className="keen-slider__slide number-slide2"
        />
        <Image
          src={photo3}
          alt="/"
          className="keen-slider__slide number-slide3"
        />
      </div>
    </div>
  );
}

// export default function DefaultCarousel() {
//   return (
//     <Carousel style={{ direction: "ltr" }}>
//       <img
//         alt="..."
//         src="https://images.wallpaperscraft.com/image/single/laptop_backlight_colorful_194324_1920x1080.jpg"
//       />
//       <img alt="..." src="" />
//       <img
//         alt="..."
//         src="https://images.wallpaperscraft.com/image/single/laptop_keyboard_glow_170138_1920x1080.jpg"
//       />
//       <img
//         alt="..."
//         src="https://images.wallpaperscraft.com/image/single/laptop_backlight_dark_164993_1920x1080.jpg"
//       />
//       <img
//         alt="..."
//         src="https://images.wallpaperscraft.com/image/single/laptop_dj_equipment_212416_1920x1080.jpg"
//       />
//     </Carousel>
//   );
// }
