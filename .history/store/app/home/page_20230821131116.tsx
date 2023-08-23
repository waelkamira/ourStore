import ThirdNavBar from "@/components/home/thirdNavBar/ThirdNavBar";
import SlidShow from "@/components/home/slidShow/SlidShow";
import Container from "@mui/material/Container";
export default function HomePage() {
  return (
      <ThirdNavBar />
    <Container>
      <div style={{ background: "black" }}>
        <SlidShow />
      </div>
    </Container>
  );
}