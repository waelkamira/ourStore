import React from 'react'
import {BsChevronLeft} from 'react-icons/bs'

const PrevArrow = ({onClick}) => {
  return (
    <div className='absolute -top-[80px]' onClick={onClick}>
        <div className='border border-gray-100 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <BsChevronLeft />
        </div>
    </div>
  )
}

export default PrevArrow