import ThirdNavBar from "@/components/home/thirdNavBar/ThirdNavBar";
import SlidShow from "@/components/home/slidShow/SlidShow";
import Container from "@mui/material/Container";
import UnderSlidShowComp1 from "@/components/home/underSlidShowComp1/underSlidShowComp1";
export default function HomePage() {
  return (
    <div>
      <ThirdNavBar />
      <SlidShow />
      <UnderSlidShowComp1 />
    </div>
  );
}
