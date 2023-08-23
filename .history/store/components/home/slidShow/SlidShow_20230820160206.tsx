import * as React from "react";
import Box from "@mui/material/Box";
import Styles from "./SlidShow.module.css";
import photo1 from "./photos/photo1.jpg";
import photo2 from "./photos/photo2.jpg";
import photo3 from "./photos/photo3.jpg";
import photo4 from "./photos/photo4.jpg";
import Image from "next/image";
// import Slider from 'react-animated-slider';
import "react-animated-slider/build/horizontal.css";
const slides = [
  { title: 'First item', description: 'Lorem ipsum'}
  { title: 'Second item', description: 'Lorem ipsum'}
];
export default function SlidShow() {
  return <>{/* <Image src={photo1} alt="/" /> */}</>;
}
