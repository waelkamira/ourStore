import Image from "next/image";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styles from "./specialProducts.module.css";
import Discount from "./photos/Discount.png";
export default function Product({
  photo,
  title,
  subTitle,
  details,
  price,
  discount,
  id,
}: any) {
  return (
    <div className={styles.product} id={id}>
      <div
        style={{
          position: "relative",
        }}
      >
        <Image
          src={photo}
          alt="/"
          style={{
            borderTopRightRadius: ".3vw",
            borderTopLeftRadius: ".3vw",
            height: "auto",
          }}
        />
        <div style={{ position: "absolute", top: ".3vw", left: ".3vw" }}>
          <Image
            src={Discount}
            alt="/"
            style={{
              position: "relative",
              top: "1vw",
              left: "1vw",
              height: "auto",
            }}
          />
          <h6
            style={{
              position: "absolute",
              top: "1.2vw",
              left: "1.2vw",
              fontSize: "14px",
              color: "white",
            }}
          >
            %25خصم
          </h6>
        </div>
      </div>
      <div
        style={{
          padding: "0.5vw",
        }}
      >
        <h1
          style={{
            color: "hsl(165.82deg 53.92% 60%)",
            fontFamily: "arabicFont",
          }}
        >
          {title}
        </h1>
        <h1 style={{ fontFamily: "arabicFont", fontWeight: "700" }}>
          {subTitle}
        </h1>
        <h3
          style={{
            fontFamily: "arabicFont",
            color: "hsl(0deg 0% 32.55%)",
            fontWeight: "500",
          }}
        >
          {details}
        </h3>
        <div
          style={{
            display: "flex",
          }}
        >
          <h1
            style={{
              fontFamily: "arabicFont",
              color: "hsl(357.6deg 89.29% 67.06%)",
              marginLeft: ".5vw",
              fontWeight: "700",
            }}
          >
            {price}
          </h1>
          <h1
            style={{
              fontFamily: "arabicFont",
              textDecoration: "line-through",
            }}
          >
            {discount}
          </h1>
        </div>
      </div>
      <div
        style={{
          padding: "0.5vw",
          display: "flex",
        }}
      >
        <Button className={styles.btn} variant="outlined" color="primary">
          <ShoppingCartOutlinedIcon
            className={styles.icon}
            style={{
              fontSize: "1vw",
              margin: ".65vw",
            }}
          />
          أضف للسلة
        </Button>
        <Button className={styles.btnIcon} variant="outlined">
          <FavoriteBorderOutlinedIcon className={styles.icon} />
        </Button>
      </div>
    </div>
  );
}
