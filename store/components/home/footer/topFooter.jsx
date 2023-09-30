import Image from "next/image";
import React from "react";
import EmailIcon from "./images/Icon.png";
import AppleStoreImage from "./images/apple.png";
import { Container } from "@mui/material";
import Button from "@/components/reusableComponents/button/Button";

const topFooter = () => {
  return (
    <Container className="flex gap-x-6">
      <div className="flex items-center">
        <Image src={EmailIcon} className="ml-4" alt="email icon" />
        <div>
          <h1 className="text-xl font-normal text-[#333] mb-1">
            الاشتراك فى النشرة البريدية
          </h1>
          <p className="text-sm font-normal text-[#666]">
            انضم الآن واحصل على خصم 10٪ على مشترياتك التالية!
          </p>
        </div>
      </div>
      <div className="grow">
        <h1 className="text-sm font-normal text-[#333]">
          يمكنك إلغاء الاشتراك في أي لحظة
        </h1>
        <div className="flex mt-4 gap-x-3">
          <div className="relative w-full " dir="rtl">
            <input
              type="email"
              className="bg-[#FFF] w-full rounded focus:outline-none py-3 px-4"
              id="floatingInput"
              placeholder="ادخل البريد الالكترونى"
            />
          </div>
          <Button>إشتراك</Button>
        </div>
      </div>
      <div>
        <h1 className="text-base font-medium text-[#333]">تطبيقات الجوال</h1>
        <div className="flex mt-4 gap-x-2">
          <div>
            <Image src={AppleStoreImage} alt="go to apple store image" />
          </div>
          <div>
            <Image src={AppleStoreImage} alt="go to apple store image" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default topFooter;
