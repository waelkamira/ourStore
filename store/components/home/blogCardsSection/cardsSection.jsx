import React from 'react';
import BlogCard from "./blogCard";
import Button from "@/components/reusableComponents/button/Button";
import img from "./images/Image.png";
import imgOne from "./images/ImageOne.png";
import imgTwo from "./images/ImageTwo.png";

const cardsSection = () => {
  return (
    <section className='flex flex-col gap-y-8 py-14'>
        <div className='flex items-end'>
            <div className='grow'>
                <h1 className="text-2xl font-medium text-[#333]">أحدث المقالات</h1>
                <p className="text-[#666]">تسوق احدث المنتجات المميزة المضافة جديد</p>
            </div>
            <div>
                <Button />
            </div>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap gap-x-6'>
            <BlogCard img={imgTwo}/>
            <BlogCard img={imgOne}/>
            <BlogCard img={img}/>
        </div>
    </section>
  )
}

export default cardsSection