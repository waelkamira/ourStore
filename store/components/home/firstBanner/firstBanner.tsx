import Image from 'next/image'
import Styles from './firstBanner.module.css'
import Container from '@mui/material/Container'
import bannerBackground from './images/bannerContainer.png'
import bannerChildImage from "./images/lap.png"


export default function firstBanner() {
  return (
    <div  className="bg-black py-24 mb-14">
        <Container className='flex gap-x-12'>
            <div className='flex flex-col'>
                <h2 className='text-white text-5xl font-bold leading-[70px] my-4'>أفضل التخفيضات 2022</h2>
                <span className='text-white text-base font-normal leading-6 w-[456px] mb-8'>متجر سلة يوفر لك كل ماتحتاجه من إلكترونيات أو أثاث منزلي بالإضافة إلى أفضل التحفيضات على المنتجات , تسوق الان واستمتع بكل بالتخفيضات على المنتجات</span>
                <a className='text-white py-4 px-14 bg-[#62D0B6] w-fit rounded cursor-pointer'>أكتشف المزيد</a>
            </div>
            <div>
                <Image
                alt=''
                src={bannerChildImage}
                width={696}
                height={320} />
            </div>
        </Container>
    </div>
  )
}
