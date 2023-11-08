import React from "react";
import { useState } from "react";

const GokuTrans = () => {
  const [curr, setstate] = useState("Kaioken");
  return (
    <div>
      <input
        type="checkbox"
        onChange={() =>
          setstate(curr === "Kaioken" ? "SuperSayan" : "Kaiyoken")
        }
      ></input>
      <h1>{curr}</h1>
    </div>
  );
};

export default GokuTrans;
