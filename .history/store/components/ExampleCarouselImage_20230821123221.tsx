import Image from "next/image";
import photo1 from "./home/slidShow/photos/photo1.jpg";
import photo2 from "./home/slidShow/photos/photo2.jpg";
import photo3 from "./home/slidShow/photos/photo3.jpg";
export default function ExampleCarouselImage() {
  return (
    <div>
      <Image src={photo1} alt="/" text="First slide" />
      <Image src={photo2} alt="/" />
      <Image src={photo3} alt="/" />
    </div>
  );
}
