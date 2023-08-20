import Link from "next/link";
import EmailIcon from "./icons/email-icon.svg";
import CallIcon from "./icons/call-icon.svg";
import Image from "next/image";

export default function topHeader() {
  return (
    <div className="flex justify-between items-center py-5 px-2">
      <div className="flex">
        <Link href="" className="px-4 flex">
          <Image src={CallIcon} alt="" />
          <p className="pr-2">966556754472+</p>
        </Link>
        <Link href="" className="px-4 flex border-[#ffffff] border-r-2">
          <Image src={EmailIcon} alt="" />
          <p className="pr-2">support@salla.sa</p>
        </Link>
      </div>
      <div className="flex">
        <Link href="" className="flex">
          <button className="pl-2">العربية-رس</button>
          <Image src={EmailIcon} alt="" className="ml-4" />
        </Link>
        <Link href="" className="border-[#ffffff] border-r-2">
          <button className="px-4">المفضلة</button>
        </Link>
        <Link href="" className="border-[#ffffff] border-r-2">
          <button className="px-4">سياسة الإستبدال أو الاسترجاع</button>
        </Link>
        <Link href="" className="border-[#ffffff] border-r-2">
          <button className="px-4">تواصل معنا</button>
        </Link>
      </div>
    </div>
  );
}
