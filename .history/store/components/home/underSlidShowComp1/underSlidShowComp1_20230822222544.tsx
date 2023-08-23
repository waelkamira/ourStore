import Container from "@mui/material/Container";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import styles from "./style.module.css";
export default function UnderSlidShowComp1() {
  return (
    <Container>
      <div className={styles.main}>
        <div>
          <LocalShippingOutlinedIcon
            style={{
              color: "hsl(165.74deg 54.01% 63.33%)",
              fontSize: "3rem",
              margin: "1rem",
            }}
          />
        </div>
        <div
          style={{
            margin: "1rem",
            fontWeight: "700",
            fontFamily: "arabicFont",
          }}
        >
          <h1>منتجات مضمونه</h1>
          <h1 style={{ color: "hsl(0deg 0% 46.67%)" }}>
            مدفوعات آمنة أقساط تصل إلى 12 شهراً
          </h1>
        </div>
        <hr className={styles.line} />
        <div>
          <LocalShippingOutlinedIcon
            style={{
              color: "hsl(165.74deg 54.01% 63.33%)",
              fontSize: "3rem",
              margin: "1rem",
            }}
          />
        </div>
        <div
          style={{
            margin: "1rem",
            fontWeight: "700",
            fontFamily: "arabicFont",
          }}
        >
          <h1>منتجات مضمونه</h1>
          <h1 style={{ color: "hsl(0deg 0% 46.67%)" }}>
            مدفوعات آمنة أقساط تصل إلى 12 شهراً
          </h1>
        </div>
        <hr className={styles.line} />
        <div>
          <LocalShippingOutlinedIcon
            style={{
              color: "hsl(165.74deg 54.01% 63.33%)",
              fontSize: "3rem",
              margin: "1rem",
            }}
          />
        </div>
        <div className={styles.text}>
          <h1>منتجات مضمونه</h1>
          <h1 style={{ color: "hsl(0deg 0% 46.67%)" }}>
            مدفوعات آمنة أقساط تصل إلى 12 شهراً
          </h1>
        </div>
      </div>
    </Container>
  );
}
