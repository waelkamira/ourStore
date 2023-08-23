"use client";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Styles from "./SlidShow.module.css";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import photo4 from "./photos/photo4.jpg";
import photo5 from "./photos/photo5.jpg";
import photo6 from "./photos/photo6.jpg";
import photo7 from "./photos/photo7.jpg";
import photo8 from "./photos/photo8.jpg";
import photo9 from "./photos/photo9.jpg";
// import Image from "next/image";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";

// export default function SlidShow() {
//   const [sliderRef] = useKeenSlider<HTMLDivElement>(
//     {
//       loop: true,
//     },
//     [
//       (slider) => {
//         let timeout: ReturnType<typeof setTimeout>;
//         let mouseOver = false;
//         function clearNextTimeout() {
//           clearTimeout(timeout);
//         }
//         function nextTimeout() {
//           clearTimeout(timeout);
//           if (mouseOver) return;
//           timeout = setTimeout(() => {
//             slider.next();
//           }, 2000);
//         }
//         slider.on("created", () => {
//           slider.container.addEventListener("mouseover", () => {
//             mouseOver = true;
//             clearNextTimeout();
//           });
//           slider.container.addEventListener("mouseout", () => {
//             mouseOver = false;
//             nextTimeout();
//           });
//           nextTimeout();
//         });
//         slider.on("dragStarted", clearNextTimeout);
//         slider.on("animationEnded", nextTimeout);
//         slider.on("updated", nextTimeout);
//       },
//     ]
//   );

//   return (
//     <div>
//       <div ref={sliderRef} className="keen-slider">
//         <Image
//           src={photo1}
//           alt="/"
//           className="keen-slider__slide number-slide1"
//         />
//         <Image
//           src={photo2}
//           alt="/"
//           className="keen-slider__slide number-slide2"
//         />
//         <Image
//           src={photo3}
//           alt="/"
//           className="keen-slider__slide number-slide3"
//         />
//       </div>
//     </div>
//   );
// }

import { Carousel } from "flowbite-react";

export default function DefaultCarousel() {
  return (
    <Carousel>
      {/* <img alt="..." src={photo1} /> */}
      <img
        alt="..."
        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cnn.com%2Ftravel%2Farticle%2Ficonic-mountains-world%2Findex.html&psig=AOvVaw36u0Qv44Fw0o2RMLGSdE01&ust=1692713743721000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKj96Jz47YADFQAAAAAdAAAAABAE"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
      />
      <img
        alt="..."
        src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
      />
    </Carousel>
  );
}
