import Image from "next/image";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
export default function Product({
  photo,
  title,
  subTitle,
  details,
  price,
  discount,
}: any) {
  return (
    <div>
      <div
        style={{
          border: "1px solid hsl(0deg 0.27% 89.89%)",
          borderRadius: ".3vw",
          boxSizing: "border-box",
        }}
      >
        <Image
          src={photo}
          alt="/"
          style={{ borderTopRightRadius: ".3vw", borderTopLeftRadius: ".3vw" }}
        />
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
            style={{ fontFamily: "arabicFont", color: "hsl(0deg 0% 56.47%)" }}
          >
            {details}
          </h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // border: "1px solid hsl(0deg 0.27% 89.89%)",
              width: "8vw",
            }}
          >
            <h1
              style={{
                fontFamily: "arabicFont",
                color: "hsl(357.6deg 89.29% 67.06%)",
              }}
            >
              {price}
            </h1>
            <h1
              style={{
                fontFamily: "arabicFont",
                textDecoration: "line-through",
                color: "hsl(0deg 0% 56.47%)",
              }}
            >
              {discount}
            </h1>
          </div>
        </div>
        <div
          style={{
            padding: "0.5vw",
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            style={{
              paddingLeft: "1.21vw",
              paddingRight: "1.21vw",
              color: "black",
              fontSize: "1vw",
              marginTop: ".65vw",
              marginBottom: ".65vw",
              border: "1px solid hsl(0deg 0% 86.67%)",
            }}
          >
            <ShoppingCartOutlinedIcon
              style={{
                color: "black",
                fontSize: "1vw",
                marginTop: ".65vw",
                marginBottom: ".65vw",
              }}
            />
            أضف للسلة
          </Button>
          <Button
            variant="outlined"
            style={{
              color: "hsl(0deg 0% 86.67%)",
              fontSize: "1vw",
              border: "1px solid hsl(0deg 0% 86.67%)",
              margin: ".4vw",
            }}
          >
            <FavoriteBorderOutlinedIcon
              style={{
                marginTop: ".65vw",
                marginBottom: ".65vw",
              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
