import Container from "@mui/material/Container";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
export default function UnderSlidShowComp1() {
  return (
    <Container>
      <div>
        <div>
          <LocalShippingOutlinedIcon
            style={{ color: "hsl(165.74deg 54.01% 63.33%)" }}
          />
        </div>
        <div>
          <h1>منتجات مضمونة</h1>
          <h1>مدفوعات آمنة أقساط تصل إلى 12 شهر</h1>
        </div>
      </div>
    </Container>
  );
}