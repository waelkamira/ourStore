import Container from "@mui/material/Container";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import styles from "./style.module.css";
export default function UnderSlidShowComp1() {
  return (
    <Container>
      <div className={styles.main}>
        <div>
          <LocalShippingOutlinedIcon className={styles.iconStyle} />
        </div>
        <div className={styles.textBox}>
          <h1>منتجات مضمونه</h1>
          <h1 style={{ color: "hsl(0deg 0% 46.67%)" }}>
            مدفوعات آمنة أقساط تصل إلى 12 شهراً
          </h1>
        </div>
        <hr className={styles.line} />
        <div>
          <LocalShippingOutlinedIcon className={styles.iconStyle} />
        </div>
        <div className={styles.textBox}>
          <h1>منتجات مضمونه</h1>
          <h1 style={{ color: "hsl(0deg 0% 46.67%)" }}>
            مدفوعات آمنة أقساط تصل إلى 12 شهراً
          </h1>
        </div>
        <hr className={styles.line} />
        <div>
          <LocalShippingOutlinedIcon className={styles.iconStyle} />
        </div>
        <div className={styles.textBox}>
          <h1>منتجات مضمونه</h1>
          <h1
            style={{
              color: "hsl(0deg 0% 46.67%)",
              marginBottom: "0rem",
              border: "1px solid hsl(0deg 0% 46.67%)",
            }}
          >
            مدفوعات آمنة أقساط تصل إلى 12 شهراً
          </h1>
        </div>
      </div>
    </Container>
  );
}
