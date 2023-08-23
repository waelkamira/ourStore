import Image from "next/image";
import Button from "@mui/material/Button";

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
      <div>
        <Image src={photo} alt="/" />
        <h1>{title}</h1>
        <h1>{subTitle}</h1>
        <h1>{details}</h1>
        <h1>{price}</h1>
        <h1>{discount}</h1>
        <Button variant="outlined" color="primary">
          أضف للسلة
        </Button>
        <Button variant="outlined" color="primary">
          أضف للسلة
        </Button>
      </div>
    </div>
  );
}
