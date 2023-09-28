import SlidShow from "@/components/home/slidShow/SlidShow";
import Container from "@mui/material/Container";
import UnderSlidShowComp1 from "@/components/home/underSlidShowComp1/underSlidShowComp1";
import UnderSlidShowComp2 from "@/components/home/underSlidShowComp2/UnderSlidShowComp2";
import FirstBanner from "@/components/home/firstBanner/firstBanner";
import ProductCategories from "@/components/home/productCategories/productCategory";
import UnderSlideshowCompo3Update from "@/components/home/underslideshowcompo3update/UnderSlideshowCompo3Update";
import BannersSection from "@/components/home/bannersSection/bannersSection";
import DiscountProductsContainer from "@/components/home/discountproductscontainer/DiscountProductsContainer";
import SpicalProductsSection from "@/components/home/specialProductsSection/specialProductsSection";
import VideoSection from "@/components/home/videoSection/videoSection";
import ArrivedProductsContainer from "@/components/home/arrivedproductscontainer/ArrivedProductsContainer";
import CommentsSection from "@/components/home/commentsSection/comments";
import ProductsContainer from "@/components/home/productsContainer/ProductsContainer";
import BannerContainer from "@/components/home/bannerContainer/BannerContainer";
import BlogCardsSection from '@/components/home/blogCardsSection/cardsSection';

export default function HomePage() {
  return (
    <div>
      {/* ..... */}
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
        <DiscountProductsContainer />
      </Container>
      <ArrivedProductsContainer />
      <Container>
        <ProductsContainer />
      </Container>
      <BannerContainer />
      <Container>
        <SpicalProductsSection />
      </Container>
      <VideoSection />
      <Container>
        <CommentsSection />
        <BlogCardsSection />
      </Container>
    </div>
  );
}
