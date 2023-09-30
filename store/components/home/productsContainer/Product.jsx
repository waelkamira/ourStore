import Image from "next/image";
export default function Product({
  id,
  photo,
  title,
  details,
  btnText,
  bkColor,
}) {
  return (
    <div
      id={id}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: `${bkColor}`,
        padding: "36px",
        borderRadius: "4px",
      }}
    >
      <div
        style={{
          display: "flex",
          padding: "10px",
        }}
      >
        <Image src={photo} alt="product image"/>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "18px",
            fontWeight: "700",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            fontSize: "14px",
            fontWeight: "400",
            color: "#666666",
            padding: "10px",
          }}
        >
          {details}
        </p>
        <button
          style={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#333333",
            padding: "10px",
          }}
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}
