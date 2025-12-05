import React, { useState } from "react";

export default function Tooltip({ text , text2}) {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
console.log("text is : ",text);
  return (
    <>
    <div style={{ position: "relative", display: "inline-block" }}>
      <h1
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Hover Over me
      </h1>
       
      {show && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: 0,
            background: "red",
            color: "white",
            padding: "8px",
            borderRadius: "6px",
            fontSize: "14px",
            whiteSpace: "nowrap",
            zIndex: 100,
          }}
        >
          {text}
        </div>
      )}
    </div>
    <hr />
    <div style={{ position: "relative", display: "inline-block" }}>
    <p
   onMouseEnter={() => setShow2(true)}
    onMouseLeave={() => setShow2(false)}
    >Hover over me to see another tooltip</p>
    {show2 && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            left: 0,
            background: "red",
            color: "white",
            padding: "8px",
            borderRadius: "6px",
            fontSize: "14px",
            whiteSpace: "nowrap",
            zIndex: 100,
          }}
        >
          {text2}
        </div>
      )}
    </div>
    </>
  );
}
