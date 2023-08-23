import ThirdNavBar from "@/components/home/thirdNavBar/ThirdNavBar";
import SlidShow from "@/components/home/slidShow/SlidShow";
export default function HomePage() {
  return (
    <>
      <ThirdNavBar />
      <div style={{ background: "black" }}>
        <SlidShow />
      </div>
    </>
  );
}
