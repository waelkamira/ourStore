import SlidShow from "@/components/home/slidShow/SlidShow";
import Container from "@mui/material/Container";
import UnderSlidShowComp1 from "@/components/home/underSlidShowComp1/underSlidShowComp1";
import UnderSlidShowComp2 from "@/components/home/underSlidShowComp2/UnderSlidShowComp2";
import FirstBanner from "@/components/home/firstBanner/firstBanner";
import ProductCategories from "@/components/home/productCategories/productCategory";
import UnderSlideshowCompo3Update from "@/components/home/underslideshowcompo3update/UnderSlideshowCompo3Update";
import BannersSection from "@/components/home/bannersSection/bannersSection";
export default function HomePage() {
  return (
    <div>
      <SlidShow />
      <UnderSlidShowComp1 />
      <Container>
        <UnderSlidShowComp2 />
        <UnderSlideshowCompo3Update />
      </Container>
      <FirstBanner />
      <Container>
        <ProductCategories />
        <BannersSection />
      </Container>
    </div>
  );
}
