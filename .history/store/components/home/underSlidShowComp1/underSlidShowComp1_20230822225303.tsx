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
        <div className={styles.textStyle}>
          <h1>منتجات مضمونه</h1>
          <h1 style={{}}>مدفوعات آمنة أقساط تصل إلى 12 شهراً</h1>
        </div>
        <hr className={styles.line} />
      </div>
    </Container>
  );
}
