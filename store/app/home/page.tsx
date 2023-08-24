
import SlidShow from "@/components/home/slidShow/SlidShow";
import Container from "@mui/material/Container";
import UnderSlidShowComp1 from "@/components/home/underSlidShowComp1/underSlidShowComp1";
import UnderSlidShowComp2 from "@/components/home/underSlidShowComp2/UnderSlidShowComp2";
export default function HomePage() {
  return (
    <div>
      <SlidShow />
      <UnderSlidShowComp1 />
      <Container>
        <UnderSlidShowComp2 />
      </Container>
    </div>
  );
}
