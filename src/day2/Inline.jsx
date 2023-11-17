import React from "react";

const Q2 = () => {
  return (
    <div>
      <h1 style={{ color: "green" }}>Inline style in JSX Example</h1>
      <p
        style={{
          backgroundColor: "lightblue",
          color: "darkblue",
          padding: "10px",
          border: "1px solid blue",
          borderRadius: "5px",
          fontSize: "16px",
        }}
      >
        This is a paragaraph with inline styles applied
      </p>
    </div>
  );
};

export default Q2;
