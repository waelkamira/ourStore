import Image from "next/image"
import CartIcon from './icons/iconcartIcon.png'
import Avatar from './icons/Avatar.png'
import ArrowIcon from "./icons/Arrow.png"
import Logo from "./icons/Logo.png"
import SearchField from '../searchField/searchField'
import Container from '@mui/material/Container'


export default function headerDetails() {
    return (
      <Container>
        <div className="flex  items-center py-8">
          <div>
            <Image src={Logo} alt="" width={103} height={52}></Image>
          </div>
          <div className="mr-12 grow">
            <SearchField />
          </div>
          <div className="flex mr-12 items-center">
            <div className="ml-2">
              <span>
                <Image src={Avatar} alt="" width={40} height={40}></Image>
              </span>
            </div>
            <div>
              <span className="text-[#A5A5A5]">مرحبا بك</span>
              <div className="flex">
                <span>تسجيل الدخول</span>
                <Image
                  className="mr-1"
                  src={ArrowIcon}
                  alt=""
                  width={14}
                  height={20}
                ></Image>
              </div>
            </div>
          </div>
          <div className="flex items-center mr-8">
            <div className="ml-2">
              <span>
                <Image src={CartIcon} alt="" width={40} height={40}></Image>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#A5A5A5]">سلة المشتريات</span>
              <span>1,200 رس</span>
            </div>
          </div>
        </div>
      </Container>
    );
}