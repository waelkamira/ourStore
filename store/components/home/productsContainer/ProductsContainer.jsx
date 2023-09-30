import { useId } from "react";
import photo1 from "./photos/Image1.png";
import photo2 from "./photos/Image2.png";
import photo3 from "./photos/Image3.png";
import Product from "./Product";
export default function ProductsContainer() {
  const products = [
    {
      id: useId(),
      photo: photo1,
      title: "معالجة أسرع وأكثر ثراءً",
      details:
        "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
      btnText: "تسوق الآن",
      bkColor: "#E0F6F0",
    },
    {
      id: useId(),
      photo: photo2,
      title: "معالجة أسرع وأكثر ثراءً",
      details:
        "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
      btnText: "تسوق الآن",
      bkColor: "#FFEFDA",
    },
    {
      id: useId(),
      photo: photo3,
      title: "معالجة أسرع وأكثر ثراءً",
      details:
        "أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش",
      btnText: "تسوق الآن",
      bkColor: "#FDDCDD",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        direction: "rtl",
        gap: "20px",
      }}
    >
      {products.map((item) => (
        <Product
          key={item.id}
          id={item.id}
          photo={item.photo}
          title={item.title}
          details={item.details}
          btnText={item.btnText}
          bkColor={item.bkColor}
        />
      ))}
    </div>
  );
}
