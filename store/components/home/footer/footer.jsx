import React from "react";
import TopFooter from "./topFooter";
import BottomFooter from './bottomFooter';
import { Container } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Link from "next/link";
import Image from "next/image";
import facebookIcon from "./images/facebook.png";
import snapchatIcon from "./images/snapchat.png";
import instagramIcon from "./images/instagram.png";
import twitterIcon from "./images/twitter.png";

const footer = () => {
  return (
    <footer className="flex flex-col mt-14 mb-2">
      <div className=" bg-[#F8F8F8] py-6">
        <TopFooter />
      </div>
      <Container>
        <div className="gap-x-12 py-12 flex">
          <div>
            <h1 className="font-medium	text-lg	text-[#333] mb-4">عن متجرنا</h1>
            <p className="max-w-[301px] text-base font-normal text-[#666]">
              متجر سلة من افضل المتاجر التى تقوم ببيع المنتجات الرقمية بأفضل
              الاسعار وماركات عالمية تسوق الان واطلع على المزيد من التصاميم
              واستمتع بأفضل العروض والخصومات
            </p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium	text-lg	text-[#333] mb-4">حسابي</h1>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-end text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="/">حسابي</Link>
              </div>
              <div className="flex items-end text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="/">طلباتي</Link>
              </div>
              <div className="flex items-end text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="/">سلة المشتريات</Link>
              </div>
              <div className="flex items-end text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="/">المفضلة</Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-medium	text-lg	text-[#333] mb-4">روابط مهمة</h1>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-end text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="/">من نحن</Link>
              </div>
              <div className="flex items-end text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="/">ساسية الخصوصية</Link>
              </div>
              <div className="flex items-end text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="/">الشروط والاحكام</Link>
              </div>
              <div className="flex items-end text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="/">الدعم الفنى</Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-medium	text-lg	text-[#333] mb-4">تواصل معنا</h1>
            <div className="flex flex-col gap-y-2">
              <div className="flex items-center text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="https://wa.me/009612345678932" target="_blank">
                  واتساب :<br /> 009612345678932
                </Link>
              </div>
              <div className="flex items-center text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="tel:+9612345678932" target="_blank">
                  موبايل :<br /> 009612345678932
                </Link>
              </div>
              <div className="flex items-center text-[#666] hover:text-[#62D0B6] hover:cursor-pointer hover:-translate-x-1.5 transition duration-300 ease-in-out">
                <div className="flex">
                  <NavigateBeforeIcon className="-mr-[8px] h-[17.2px]" />
                  <NavigateBeforeIcon className="-mr-[19px] h-[17.2px]" />
                </div>
                <Link href="https://salla.sa" target="_blank">
                  البريد :<br /> https://salla.sa
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-medium	text-lg	text-[#333] mb-4">تابعنا على</h1>
            <div className="flex gap-x-4">
              <Link href="/" className="grayscale  hover:grayscale-0">
                <div className="flex justify-center items-center w-[34px] h-[34px] border border-[#62D0B6] rounded-full">
                  <Image src={facebookIcon} />
                </div>
              </Link>
              <Link href="/" className="grayscale  hover:grayscale-0">
                <div className="flex justify-center items-center w-[34px] h-[34px] border border-[#62D0B6] rounded-full">
                  <Image src={twitterIcon} />
                </div>
              </Link>
              <Link href="/" className="grayscale  hover:grayscale-0">
                <div className="flex justify-center items-center w-[34px] h-[34px] border border-[#62D0B6] rounded-full">
                  <Image src={instagramIcon} />
                </div>
              </Link>
              <Link href="/" className="grayscale  hover:grayscale-0">
                <div className="flex justify-center items-center w-[34px] h-[34px] border border-[#62D0B6] rounded-full">
                  <Image src={snapchatIcon} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <div className="bg-[#1D1F1F] py-4">
        <BottomFooter />
      </div>
    </footer>
  );
};

export default footer;
