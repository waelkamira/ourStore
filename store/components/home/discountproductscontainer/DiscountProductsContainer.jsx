import styles from "./styles.module.css";
import Button from "@mui/material/Button";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Image from "next/image";
import photo from "./photos/Image.png";
import CountdownTimer from "./CountdownTimer";
import HoverRating from "./Rating";
import * as React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import Discount from "./photos/Discount.png";
export default function DiscountProductsContainer() {
  const [value, setValue] = React.useState(0);
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
            style={{ marginBottom: "0vw" }}
          >
            عرض الكل
            <NavigateBeforeIcon />
          </Button>
        </div>
      </div>
      <div className={styles.discountDivs}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #62d0b6",
            borderRadius: "5px",
            flexGrow: "1",
            padding: "1rem",
            paddingBottom: "0rem",
          }}
        >
          <div
            style={{
              position: "relative",
              // border: "1px solid green",
            }}
          >
            <Image
              src={photo}
              alt="/"
              style={{
                height: "30vh",
                minWidth: "3vw",
                // border: "1px solid green",
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
                  fontSize: "clamp(0.875rem, 0vw + 0.875rem, 0.875rem)",
                  color: "white",
                }}
              >
                %25خصم
              </h6>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              // border: "1px solid red",
              height: "100%",
            }}
          >
            <h1 style={{ color: "#62d0b6" }}>ساعات</h1>
            <h1
              style={{
                fontSize: "clamp(1.125rem, 0vw + 1.125rem, 1.125rem)",
                fontWeight: "700",
              }}
            >
              ساعة ذكية جديدة من سلسلة 8
            </h1>
            <h1 style={{ color: "#9d9d9d" }}>سوار رياضي اسود - عادي.</h1>
            <div>
              <HoverRating />
            </div>
            <div style={{ display: "flex" }}>
              <h1
                style={{ color: "red", fontWeight: "700", marginLeft: "1vw" }}
              >
                250.00 رس
              </h1>
              <h1 style={{ color: "#9d9d9d", textDecoration: "line-through" }}>
                350.00 ر.س
              </h1>
            </div>
            <div
              style={{
                paddingTop: "0.5vw",
                paddingBottom: "0vw",
                display: "flex",
                flexDirection: "column",
                // border: "1px solid green",
                marginBottom: "0vw",
              }}
            >
              <CountdownTimer />
              <div
                style={{
                  display: "flex",
                }}
              >
                <Button
                  className={styles.btn}
                  variant="outlined"
                  color="primary"
                >
                  <ShoppingCartOutlinedIcon
                    className={styles.icon}
                    style={{
                      fontSize: "clamp(1rem, 0vw + 1rem, 1rem)",
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
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid #62d0b6",
            borderRadius: "5px",
            flexGrow: "1",
            padding: "1rem",
            paddingBottom: "0rem",
          }}
        >
          <div
            style={{
              position: "relative",
              // border: "1px solid green",
            }}
          >
            <Image
              src={photo}
              alt="/"
              style={{
                height: "30vh",
                minWidth: "3vw",
                // border: "1px solid green",
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
                  fontSize: "clamp(0.875rem, 0vw + 0.875rem, 0.875rem)",
                  color: "white",
                }}
              >
                %25خصم
              </h6>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexGrow: "1",
              // border: "1px solid red",
              height: "100%",
            }}
          >
            <h1 style={{ color: "#62d0b6" }}>ساعات</h1>
            <h1
              style={{
                fontSize: "clamp(1.125rem, 0vw + 1.125rem, 1.125rem)",
                fontWeight: "700",
              }}
            >
              ساعة ذكية جديدة من سلسلة 8
            </h1>
            <h1 style={{ color: "#9d9d9d" }}>سوار رياضي اسود - عادي.</h1>
            <div>
              <HoverRating />
            </div>
            <div style={{ display: "flex" }}>
              <h1
                style={{ color: "red", fontWeight: "700", marginLeft: "1vw" }}
              >
                250.00 رس
              </h1>
              <h1 style={{ color: "#9d9d9d", textDecoration: "line-through" }}>
                350.00 ر.س
              </h1>
            </div>
            <div
              style={{
                paddingTop: "0.5vw",
                paddingBottom: "0vw",
                display: "flex",
                flexDirection: "column",
                // border: "1px solid green",
                marginBottom: "0vw",
              }}
            >
              <CountdownTimer />
              <div
                style={{
                  display: "flex",
                }}
              >
                <Button
                  className={styles.btn}
                  variant="outlined"
                  color="primary"
                >
                  <ShoppingCartOutlinedIcon
                    className={styles.icon}
                    style={{
                      fontSize: "clamp(1rem, 0vw + 1rem, 1rem)",
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
          </div>
        </div>
      </div>
    </div>
  );
}
