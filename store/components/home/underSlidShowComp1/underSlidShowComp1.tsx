import Container from "@mui/material/Container";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import styles from "./style.module.css";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import PaymentIcon from "@mui/icons-material/Payment";
export default function UnderSlidShowComp1() {
  return (
    <Container>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <LocalShippingOutlinedIcon className={styles.iconStyle} />
          </div>
          <div>
            <h1 className={styles.text1Style}>منتجات مضمونه</h1>
            <h1 className={styles.text2Style}>
              مدفوعات آمنة أقساط تصل إلى 12 شهراً
            </h1>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.main}>
          <div>
            <PublishedWithChangesIcon className={styles.iconStyle} />
          </div>
          <div>
            <h1 className={styles.text1Style}>شحن مجاني</h1>
            <h1 className={styles.text2Style}>
              مدفوعات آمنة أقساط تصل إلى 12 شهراً
            </h1>
          </div>
        </div>
        <hr className={styles.line} />
        <div className={styles.main}>
          <div>
            <PaymentIcon className={styles.iconStyle} />
          </div>
          <div>
            <h1 className={styles.text1Style}>مدفوعات آمنة</h1>
            <h1 className={styles.text2Style}>
              مدفوعات آمنة أقساط تصل إلى 12 شهراً
            </h1>
          </div>
        </div>
      </div>
    </Container>
  );
}
