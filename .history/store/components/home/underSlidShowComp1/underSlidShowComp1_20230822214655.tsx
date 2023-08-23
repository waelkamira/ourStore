import Container from "@mui/material/Container";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import styles from "./style.module.css";
export default function UnderSlidShowComp1() {
  return (
    <Container>
      <div className={styles.main}>
        <div>
          <LocalShippingOutlinedIcon
            style={{ color: "hsl(165.74deg 54.01% 63.33%)", width: "10rem" }}
          />
        </div>
        <div style={{ margin: "1rem" }}>
          <h1>منتجات مضمونة</h1>
          <h1>مدفوعات آمنة أقساط تصل إلى 12 شهر</h1>
        </div>
      </div>
    </Container>
  );
}
