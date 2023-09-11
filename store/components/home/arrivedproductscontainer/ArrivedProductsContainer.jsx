import styles from "./styles.module.css";
import NavigationButtons from "@/components/reusableComponents/navigationButtons/NavigationButtons";
import Container from "@mui/material/Container";

import { useId } from "react";
import Product from "../underslideshowcompo3update/Product";
import photo1 from "../underslideshowcompo3update/photos/photo1.png";
import photo5 from "../underslideshowcompo3update/photos/photo5.png";
import photo3 from "../underslideshowcompo3update/photos/photo3.png";

export default function ArrivedProductsContainer() {
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
      photo: photo5,
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
      photo: photo5,
      title: "سماعات",
      subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
      details: "سماعة ذات صوت عالي الدقة",
      price: "450.00 رس",
      discount: "550.00 رس",
    },
  ];
  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.buttonAndTextBox}>
          <div className={styles.textBox}>
            <h3 style={{ fontSize: "1.5vw", fontWeight: "700" }}>وصل حديثا</h3>
            <h4 style={{ color: "hsl(0deg 0% 40.39%)", fontWeight: "700" }}>
              تسوق أحدث المنتجات المميزة المضافة جديد
            </h4>
          </div>
          <div>
            <NavigationButtons />
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
      </Container>
    </div>
  );
}
