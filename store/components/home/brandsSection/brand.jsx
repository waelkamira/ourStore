import Image from 'next/image'
import React from 'react'

const brand = ({img}) => {
  return (
    <div dir='rtl' className='grayscale px-6 rounded border border-[#EEE]'>
        <Image src={img} alt='brand logo' className='aspect-[3/2] object-contain ' />
    </div>
  )
}

export default brand