import styles from "./specialProducts.module.css";
import Button from "@/components/reusableComponents/button/Button";
import Product from "./specialProducts";
import photo1 from "./photos/photo1.png";
import photo2 from "./photos/photo2.png";
import photo3 from "./photos/photo3.png";
import photo4 from "./photos/photo4.png";
import photo5 from "./photos/photo5.png";
import photo6 from "./photos/photo6.png";
import photo7 from "./photos/photo7.png";
import photo8 from "./photos/photo8.png";
import { useId } from "react";

export default function UnderSlideshowCompo3Update() {
  const products = [
    {
      id: useId(),
      photo: photo1,
      title: "ساعات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
    {
      id: useId(),
      photo: photo2,
      title: "سماعات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
    {
      id: useId(),
      photo: photo3,
      title: "ساعات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
    {
      id: useId(),
      photo: photo4,
      title: "سماعات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
    {
      id: useId(),
      photo: photo5,
      title: "سماعات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
    {
      id: useId(),
      photo: photo6,
      title: "ساعات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
    {
      id: useId(),
      photo: photo7,
      title: "موبايلات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
    {
      id: useId(),
      photo: photo8,
      title: "موبايلات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.buttonAndTextBox}>
        <div className={styles.textBox}>
          <h3 style={{ color:"#333", fontSize: "clamp(1.25rem, calc(1.18rem + 0.36vw), 1.50rem)", fontWeight: "500" }}>منتجات مميزة</h3>
          <h4 style={{ color: "#666", fontWeight: "400", fontSize : "clamp(0.88rem, calc(0.84rem + 0.18vw), 1.00rem)" }}>
            تسوق أحدث المنتجات المميزة المضافة جديد
          </h4>
        </div>
        <div>
          <Button />
        </div>
      </div>
      <div className={styles.products}>
        {/* ....... تم عمل ماب على قائمة العناصر ليتم تحديثها بشكل أتوماتيكي في الملف*/}
        {products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            photo={item.photo}
            title={item.title}
            subTitle={item.subTitle}
            details={item.details}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
}
