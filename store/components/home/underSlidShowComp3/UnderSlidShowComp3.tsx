import styles from "./styles.module.css";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Product from "./Product";
import photo12 from "./photos/photo12.png";
const products = [
  {
    photo: photo12,
    title: "سماعات",
    subTitle: "سماعات ساوند كور كيو30 فوق الأذن",
    details: "سماعة ذات صوت عالي الدقة",
    price: "450.00 رس",
    discount: "550.00 رس",
  },
];
export default function UnderSlidShowComp3() {
  return (
    <div className={styles.main}>
      <div className={styles.buttonAndTextBox}>
        <div className={styles.textBox}>
          <h3 style={{ fontSize: "2vw", fontWeight: "700" }}>منتجات مميزة</h3>
          <h4 style={{ color: "hsl(0deg 0% 40.39%)", fontWeight: "700" }}>
            تسوق أحدث المنتجات المميزة المضافة جديد
          </h4>
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            style={{ marginBottom: "0rem" }}
          >
            عرض الكل
            <NavigateBeforeIcon />
          </Button>
        </div>
      </div>
      <div>
        {products.map((item) => (
          <Product
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
