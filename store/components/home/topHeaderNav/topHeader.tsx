import Link from "next/link"
import EmailIcon from '../topHeaderNav/icons/email-icon.svg'
import CallIcon from '../topHeaderNav/icons/call-icon.svg'
import Image from "next/image"
import Container from "@mui/material/Container"

export default function topHeader(){
return(
    <div className="bg-[#F8F8F8]">
        <Container className="flex justify-between items-center py-5 px-2">
            <div className="flex">
            <Link href='' className="px-4 flex">
                <Image src={CallIcon} alt=''/>
                <p className="pr-2 text-[#666]">966556754472+</p>
            </Link>
            <Link href='' className="px-4 flex border-[#666] border-r-2">
                <Image src={EmailIcon} alt=''/>
                <p className="pr-2 text-[#666]">support@salla.sa</p>
            </Link>
            </div>
            <div className="flex">
            <Link href='' className="flex">
                    <button className="pl-2 text-[#666]">العربية-رس</button>
                    <Image src={EmailIcon} alt='' className="ml-4"/>
            </Link>
            <Link href='' className="border-[#666] border-r-2">
                <button className="px-4 text-[#666]">المفضلة</button>
            </Link>
            <Link href='' className="border-[#666] border-r-2">
                <button className="px-4 text-[#666]">سياسة الإستبدال أو الاسترجاع</button>
            </Link>
            <Link href='' className="border-[rgb(102,102,102)] border-r-2">
                <button className="px-4 text-[#666]">تواصل معنا</button>
            </Link>
            </div>
        </Container>
        

    </div>
)
};