import React from "react";
import Countdown from "react-countdown";

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  return (
    <div style={{ display: "flex", flexGrow: "1" }}>
      <div>
        <h1>{days}</h1>
        <h1>يوم</h1>
      </div>
      <div>
        <h1>{hours}</h1>
        <h1>ساعة</h1>
      </div>
      <div>
        <h1>{minutes}</h1>
        <h1>دقيقة</h1>
      </div>
      <div>
        <h1>{seconds}</h1>
        <h1>ثانية</h1>
      </div>
    </div>
  );
};

export default function CountdownTimer() {
  return (
    <div>
      <Countdown date="2023-10-01T01:02:03" renderer={renderer} />;
    </div>
  );
}
