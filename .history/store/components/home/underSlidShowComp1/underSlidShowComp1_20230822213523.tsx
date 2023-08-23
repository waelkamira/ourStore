import Container from "@mui/material/Container";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import { useTheme } from "@mui/material/styles";
export default function UnderSlidShowComp1() {
  const theme = useTheme();
  return (
    <Container>
      <div>
        <div>
          <LocalShippingOutlinedIcon style={{ color: "primary" }} />
        </div>
        <div>
          <h1>منتجات مضمونة</h1>
          <h1>مدفوعات آمنة أقساط تصل إلى 12 شهر</h1>
        </div>
      </div>
    </Container>
  );
}