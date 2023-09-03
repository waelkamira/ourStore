import styles from "./styles.module.css";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Image from "next/image";
import photo from "./photos/Image.png";
import CountdownTimer from "./CountdownTimer";
export default function DiscountProductsContainer() {
  return (
    <div className={styles.main}>
      <div className={styles.buttonAndTextBox}>
        <div className={styles.textBox}>
          <h3 style={{ fontSize: "1.5vw", fontWeight: "700" }}>
            عروض تنتهي قريبا
          </h3>
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
        <div>
          <Image
            src={photo}
            alt="/"
            style={{
              top: "1vw",
              left: "1vw",
              height: "auto",
            }}
          />
        </div>
      </div>
      <CountdownTimer />
    </div>
  );
}
