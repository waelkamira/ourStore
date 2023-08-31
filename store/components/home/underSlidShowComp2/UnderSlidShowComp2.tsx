import Image from "next/image";
import photo10 from "./photos/photo10.png";
import photo11 from "./photos/photo11.png";
import styles from "./styles.module.css";
export default function UnderSlidShowComp2() {
  return (
    <div className={styles.main}>
      <div className={styles.photoAndTextBox}>
        <div style={{ marginLeft: "1rem" }}>
          <Image
            src={photo10}
            alt="/"
            className={styles.photo}
            style={{
              background: "hsl(206.67deg 21.95% 91.96%)",
            }}
          />
        </div>
        <div className={styles.textBox} style={{ marginLeft: "2rem" }}>
          <h4
            style={{
              color: "hsl(200deg 1.28% 53.92%)",
              fontWeight: "700",
            }}
          >
            سماعات ديجيتال
          </h4>
          <h1 style={{ fontSize: "2vw", fontWeight: "700" }}>أفضل صوت نقي</h1>
          <h3 style={{ fontWeight: "700", marginTop: "1vw" }}>تسوق الأن</h3>
        </div>
      </div>
      <div className={styles.photoAndTextBox}>
        <div
          style={{
            marginRight: "1rem",
          }}
        >
          <Image
            src={photo11}
            alt="/"
            className={styles.photo}
            style={{ background: "hsl(0deg 30% 92.16%) " }}
          />
        </div>
        <div className={styles.textBox}>
          <h4 style={{ color: "hsl(200deg 1.28% 53.92%)", fontWeight: "700" }}>
            سماعات ديجيتال
          </h4>
          <h1 style={{ fontSize: "2vw", fontWeight: "700" }}>أفضل صوت نقي</h1>
          <h3 style={{ fontWeight: "700", marginTop: "1vw" }}>تسوق الأن</h3>
        </div>
      </div>
    </div>
  );
}
