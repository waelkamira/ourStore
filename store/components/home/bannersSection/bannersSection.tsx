import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import airpudsImage from './images/airpuds.png'
import playstationController from "./images/playstationController.png"
import vacuumImage from './images/vacuum.png'
import lenceImage from './images/Banner-removebg-preview.png'

export default function bannersSection() {
  return (
    <section className='flex flex-col py-14 gap-y-6 mb-14'>
        <div className='flex  gap-x-6'>
            <div className='flex bg-[#FB5D2D] justify-center items-center w-[384px] h-56 rounded'>
                <div className='mr-6'>
                    <span className='text-[#ffffff] text-base'>سماعات ديجتال</span>
                    <p className='text-[#ffffff] mb-[26px]'
                    style={{
                        fontSize: "clamp(1.25rem, calc(1.18rem + 0.36vw), 1.50rem)",
                        fontWeight: "500",
                    }}>أفضل صوت نقي</p>
                    <Link href="/" className='text-[#ffffff] text-base font-[500] '>تسوق الآن</Link>
                </div>
                <div className='my-[40px] mr-[30px]'>
                <Image width={130} height={0} src={vacuumImage} alt=''/>
                </div>
            </div>
            <div className='flex bg-[#244065] justify-center items-center w-[384px] h-56 rounded'>
                <div className='mr-6'>
                    <span className='text-[#ffffff] text-base'>سماعات ديجتال</span>
                    <p className='text-[#ffffff] mb-[26px]'
                    style={{
                        fontSize: "clamp(1.25rem, calc(1.18rem + 0.36vw), 1.50rem)",
                        fontWeight: "500",
                    }}>أفضل صوت نقي</p>
                    <Link href="/" className='text-[#ffffff] text-base font-[500] '>تسوق الآن</Link>
                </div>
                <div className='my-[40px] mr-[30px]'>
                <Image width={130} height={0} src={playstationController} alt=''/>
                </div>
            </div>
            <div className='flex bg-[#F7BB05] justify-center items-center w-[384px] h-56 rounded'>
                <div className='mr-6'>
                    <span className='text-[#ffffff] text-base'>سماعات ديجتال</span>
                    <p className='text-[#ffffff] mb-[26px]'
                    style={{
                        fontSize: "clamp(1.25rem, calc(1.18rem + 0.36vw), 1.50rem)",
                        fontWeight: "500",
                    }}>أفضل صوت نقي</p>
                    <Link href="/" className='text-[#ffffff] text-base font-[500] '>تسوق الآن</Link>
                </div>
                <div className='my-[40px] mr-[30px]'>
                <Image width={130} height={0} src={airpudsImage} alt=''/>
                </div>
            </div>
        </div>
        <div className='flex bg-[#0E0D0B] justify-start items-center rounded gap-x-64'>
                <div className=''>
                <Image width={0} height={0} src={lenceImage} alt=''/>
                </div>
                <div className='my-14 '>
                    <span className='text-[#ffffff] text-base'>سماعات ديجتال</span>
                    <p className='text-[#ffffff] mb-[26px]'
                    style={{
                        fontSize: "clamp(1.50rem, calc(1.29rem + 1.07vw), 2.25rem)",
                        fontWeight: "500",
                    }}>أفضل صوت نقي</p>
                    <Link href="/" className='text-[#ffffff] text-base font-[500] '>تسوق الآن</Link>
                </div>
        </div>
    </section>
  )
}
