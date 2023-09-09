import React from "react";
import Countdown from "react-countdown";
import styles from "./styles.module.css";
const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div
      style={{
        display: "flex",
        flexGrow: "1",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <div className={styles.countdownDivs}>
        <h1 className={styles.countdownNumber}>{days}</h1>
        <h1 className={styles.countdownText}>يوم</h1>
      </div>
      <div className={styles.countdownDivs}>
        <h1 className={styles.countdownNumber}>{hours}</h1>
        <h1 className={styles.countdownText}>ساعة</h1>
      </div>
      <div className={styles.countdownDivs}>
        <h1 className={styles.countdownNumber}>{minutes}</h1>
        <h1 className={styles.countdownText}>دقيقة</h1>
      </div>
      <div className={styles.countdownDivs}>
        <h1 className={styles.countdownNumber}>{seconds}</h1>
        <h1 className={styles.countdownText}>ثانية</h1>
      </div>
    </div>
  );
};
export default function CountdownTimer() {
  return (
    <div>
      <Countdown date="2023-10-01T01:02:03" renderer={renderer} />
    </div>
  );
}
