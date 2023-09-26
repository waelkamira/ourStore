import React from "react";
import Slider from "react-slick";
import userOne from "./images/Ellipse-5.png";
import Card from './Card';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';


export default function SimpleSlider() {

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    // const [value, setValue] = useState(4);
    return (
      <div className="flex flex-col gap-y-8 py-14">
        <div>
        <h1 className="text-2xl font-medium text-[#333]">آراء العملاء</h1>
        <p className="text-[#666]">يتم استعراض بعض آراء وتعليقات المستخدمين</p>
        </div>
        <Slider {...settings}>
          <Card userImg={userOne}/>
          <Card userImg={userOne}/>
          <Card userImg={userOne}/>
          <Card userImg={userOne}/>
          <Card userImg={userOne}/>
          <Card userImg={userOne}/>
        </Slider>
      </div>
    );
}