import React from 'react'
import {BsChevronRight} from 'react-icons/bs'

const NextArrow = ({onClick}) => {
  return (
    <div className='absolute left-[60px] -top-[80px]' onClick={onClick}>
        <div className='border border-gray-100 h-[50px] w-[50px] rounded-full grid place-items-center cursor-pointer'>
            <BsChevronRight />
        </div>
    </div>
  )
}

export default NextArrow