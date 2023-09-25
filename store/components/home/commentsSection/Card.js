import React from 'react'
import Image from "next/image";
import Rating from '@mui/material/Rating';
import { useState } from "react";
import quotesImg from "./images/Left-quotes-sign.png";

const Card = ({userImg}) => {
    const [value, setValue] = useState(4);

  return (
    <div className="p-6 rounded border border-[#eee] flex flex-col gap-y-4" dir='rtl'>
    <div className="flex" >
      <span className="grow">
      <Rating name="read-only" value={value} readOnly />  
      </span>
      <Image src={quotesImg} alt=""  />
    </div>
    <div>
      <p className="max-w-[336px] text-[#666]">استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً</p>
    </div>
    <div className="flex">
      <Image src={userImg} alt="" />
      <div className='mr-2'>
        <h3 className="text-[#333] text-lg">محمد السيد</h3>
        <p className="text-[#666]">مهندس إستشارى لدى شركة سلة</p>
      </div>
    </div>
  </div>
  )
}

export default Card