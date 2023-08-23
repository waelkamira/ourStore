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

// Initialization for ES Users
import { Carousel, initTE } from "tw-elements";

initTE({ Carousel });
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
      <div
        id="carouselDarkVariant"
        className="relative"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        <div
          className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          <button
            data-te-target="#carouselDarkVariant"
            data-te-slide-to="0"
            data-te-carousel-active
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-te-target="#carouselDarkVariant"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            data-te-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-te-target="#carouselDarkVariant"
            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            data-te-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div
            className="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
              className="block w-full"
              alt="Motorbike Smoke"
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
              className="block w-full"
              alt="Mountaintop"
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>

          <div
            className="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade
            data-te-carousel-item
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
              className="block w-full"
              alt="Woman Reading a Book"
            />
            <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>

        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselDarkVariant"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8 dark:grayscale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>

        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselDarkVariant"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8 dark:grayscale">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </Box>
  );
}
