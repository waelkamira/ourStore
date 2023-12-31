"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Styles from "./styles.module.css";
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
    <div className={Styles.main}>
      <div className={Styles.textBox}>
        <h1>أفضل التخفيضات 2023</h1>
        <p style={{ fontSize: "1rem" }}>
          متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى
          أفضل التخفيضات على المنتجات , تسوق الأن واستمتع بكل التخفيضات على
          المنتجات
        </p>
        <button className={Styles.btn}>اكتشف المزيد</button>
      </div>
      <div
        ref={sliderRef}
        className="keen-slider"
        style={{
          height: "60vh",
          width: "60vw",
          boxSizing: "border-box",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Image
          src={photo1}
          alt="/"
          className="keen-slider__slide number-slide1 "
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
        <Image
          src={photo4}
          alt="/"
          className="keen-slider__slide number-slide4"
        />
        <Image
          src={photo5}
          alt="/"
          className="keen-slider__slide number-slide5"
        />
        <Image
          src={photo6}
          alt="/"
          className="keen-slider__slide number-slide6"
        />
        <Image
          src={photo7}
          alt="/"
          className="keen-slider__slide number-slide7"
        />
        <Image
          src={photo8}
          alt="/"
          className="keen-slider__slide number-slide8"
        />
        <Image
          src={photo9}
          alt="/"
          className="keen-slider__slide number-slide9"
        />
      </div>
    </div>
  );
}
