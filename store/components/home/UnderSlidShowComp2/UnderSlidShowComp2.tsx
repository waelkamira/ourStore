import Image from "next/image";
import phot11 from "./photos/photo11.jpg";
import phot10 from "./photos/photo10.png";
export default function UnderSlidShowComp2() {
  return (
    <div>
      <div>
        <Image src={phot10} />
      </div>
    </div>
  );
}
