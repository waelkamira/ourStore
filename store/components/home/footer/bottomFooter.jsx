import React from 'react';
import { Container } from "@mui/material";
import Image from 'next/image';
import vatLogo from './images/vatLogo.png';
import visaLogo from './images/visa.png';
import masterCardLogo from './images/masterCard.png';
import paypalLogo from './images/paypal.png';
import madaLogo from './images/mada.png';

const bottomFooter = () => {
  return (
    <Container>
        <div className="flex">
            <div className=' flex grow'>
                <p className='text-[#fff] self-center'>الحقوق محفوظة لمنصة سلة © 2023</p>
            </div>
            <div className='flex items-center'>
                <div className='flex ml-6'>
                    <Image src={vatLogo} alt='taxes organization logo' className='ml-2'/>
                    <p className='text-[#fff] mt-1'>الرقم الضريبي : 546987552</p>
                </div>
                <div className='flex items-center gap-x-2'>
                    <div className="flex justify-center items-center rounded bg-white w-[64px] h-[31px]">
                    <Image src={visaLogo} alt='visa logo'/>
                    </div>
                    <div className="flex justify-center items-center rounded bg-white w-[64px] h-[31px]">
                    <Image src={masterCardLogo} alt='master Card logo'/>
                    </div>
                    <div className="flex justify-center items-center rounded bg-white w-[64px] h-[31px]">
                    <Image src={paypalLogo} alt='paypal logo'/>
                    </div>
                    <div className="flex justify-center items-center rounded bg-white w-[64px] h-[31px]">
                    <Image src={madaLogo} alt='mada logo'/>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default bottomFooter;