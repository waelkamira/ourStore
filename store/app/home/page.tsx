import ThirdNavBar from "@/components/home/thirdNavBar/ThirdNavBar";
import SlidShow from "@/components/home/slidShow/SlidShow";
import Container from "@mui/material/Container";
import UnderSlidShowComp1 from "@/components/home/underSlidShowComp1/underSlidShowComp1";
import UnderSlidShowComp2 from "@/components/home/UnderSlidShowComp2/UnderSlidShowComp2";
import UnderSlidShowComp3 from "@/components/home/underSlidShowComp3/UnderSlidShowComp3";
export default function HomePage() {
  return (
    <div>
      <ThirdNavBar />
      <SlidShow />
      <Container>
        <UnderSlidShowComp1 />
        <UnderSlidShowComp2 />
        <UnderSlidShowComp3 />
      </Container>
    </div>
  );
}
