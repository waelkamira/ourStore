import React from 'react'
import Image from "next/image";

const blogCard = ({img}) => {
  return (
    <div className='max-w-[384px]' >
        <div className='relative mb-7' >
            <div className='w-[50px] flex flex-col items-center absolute bg-white rounded top-4 right-4 pb-1'>
              <span className='text-xl font-medium -mb-[7px]'>18</span>
              <span className='text-sm	text-[#666]'>يناير</span>
            </div>
            <Image src={img} alt='blog card main image' />
        </div>
        <div className='mb-2'>
            <h1 className='text-lg font-bold text-center'>مدى تأثير التكنولوجيا على حياة الإنسان</h1>
        </div>
        <div className='mb-4'>
            <p className='text-[#666] text-center' >لكي تنجح في أعمال التجارة الإلكترونية، تحتاج إلى بيع المنتجات المطلوبة، إذا لم يكن لديك فكرة، سنشارك في هذه المقالة قائمة أنواع المنتجات</p>
        </div>
    </div>
  )
}

export default blogCard