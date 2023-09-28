import Image from 'next/image'
import React from 'react'
import Button from "@/components/reusableComponents/button/Button";
import airbudsImage from "@/components/home/productCategories/images/Image.png"
import headphonesImage from "@/components/home/productCategories/images/Imageheadphone.png"
import laptopsImage from "@/components/home/productCategories/images/Imagelaptops.png"
import pcDisplaiesImage from "@/components/home/productCategories/images/ImagepcDisplaies.png"
import WatchesImage from "@/components/home/productCategories/images/Imagewatches.png"
import phonesImage from "@/components/home/productCategories/images/Imagephones.png"
import leftArrow from "@/components/home/productCategories/images/leftArrowIcon.svg"
import Styles from "./productCategory.module.css"

export default function productCategory() {
  return (
    <div className="mb-14">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-2xl font-[500] leading-9">تسوق حسب الفئات</h2>
          <h5 className="text-base font-[400]">
            تسوق احدث المنتجات المميزة المضافة جديد
          </h5>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className="flex gap-x-6 justify-center">
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-4">
            <Image src={airbudsImage} alt="#" width={0} height={0} />
          </div>
          <div>
            <h5 className={Styles.productCategoryTitle}>سماعات أذن</h5>
          </div>
          <div>
            <span className={Styles.productCategorySubtitle}>150 منتج</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-4">
            <Image src={pcDisplaiesImage} alt="#" width={0} height={0} />
          </div>
          <div>
            <h5 className={Styles.productCategoryTitle}>شاشات كمبيوتر</h5>
          </div>
          <div>
            <span className={Styles.productCategorySubtitle}>150 منتج</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-4">
            <Image src={phonesImage} alt="#" width={0} height={0} />
          </div>
          <div>
            <h5 className={Styles.productCategoryTitle}>موبايلات</h5>
          </div>
          <div>
            <span className={Styles.productCategorySubtitle}>150 منتج</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-4">
            <Image src={WatchesImage} alt="#" width={0} height={0} />
          </div>
          <div>
            <h5 className={Styles.productCategoryTitle}>ساعات رقمية</h5>
          </div>
          <div>
            <span className={Styles.productCategorySubtitle}>150 منتج</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-4">
            <Image src={headphonesImage} alt="#" width={0} height={0} />
          </div>
          <div>
            <h5 className={Styles.productCategoryTitle}>سماعات</h5>
          </div>
          <div>
            <span className={Styles.productCategorySubtitle}>150 منتج</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-4">
            <Image src={laptopsImage} alt="#" width={0} height={0} />
          </div>
          <div>
            <h5 className={Styles.productCategoryTitle}>أجهزة لابتوب</h5>
          </div>
          <div>
            <span className={Styles.productCategorySubtitle}>150 منتج</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="mb-4">
            <Image src={airbudsImage} alt="#" width={0} height={0} />
          </div>
          <div>
            <h5 className={Styles.productCategoryTitle}>سماعات أذن</h5>
          </div>
          <div>
            <span className={Styles.productCategorySubtitle}>150 منتج</span>
          </div>
        </div>
      </div>
    </div>
  );
}
