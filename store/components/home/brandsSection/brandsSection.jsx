import React from 'react';
import Slider from 'react-slick';
import BrandCard from './brand';
import brandImg from './images/Brand.png';
import brandImgOne from './images/BrandOne.png';
import brandImgTwo from './images/BrandTwo.png';
import NextArrow from '@/components/home/commentsSection/NextArrow';
import PrevArrow from '@/components/home/commentsSection/PrevArrow';

const brandsSection = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
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
  return (
    <section className='flex flex-col gap-y-8 py-14'>
        <div className='relative'>
            <h1 className="text-2xl font-medium text-[#333]">الماركات التجارية</h1>
            <p className="text-[#666]">يمكنك التسوق من خلال الماركات التجارية</p>
        </div>
        <Slider {...settings}>
            <BrandCard img={brandImgTwo} />
            <BrandCard img={brandImgOne} />
            <BrandCard img={brandImg} />
            <BrandCard img={brandImgOne} />
            <BrandCard img={brandImgTwo} />
            <BrandCard img={brandImg} />
        </Slider>
    </section>
  )
}

export default brandsSection