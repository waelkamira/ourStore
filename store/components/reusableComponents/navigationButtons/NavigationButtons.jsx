"use client";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import ExpandCircleDownTwoToneIcon from "@mui/icons-material/ExpandCircleDownTwoTone";
export default function NavigationButtons() {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          margin: "5px",
        }}
      >
        <ArrowForwardIosIcon
          style={{
            borderRadius: "50%",
            padding: "15px",
            fontSize: "3rem",
            background: "white",
            color: "gray",
          }}
        />
      </div>
      <div
        style={{
          margin: "5px",
        }}
      >
        <ArrowForwardIosIcon
          style={{
            borderRadius: "50%",
            padding: "15px",
            fontSize: "3rem",
            background: "white",
            color: "gray",
            rotate: "180deg",
          }}
        />
      </div>
    </div>
  );
}
