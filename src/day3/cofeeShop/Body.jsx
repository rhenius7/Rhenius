import React from "react";
import coffelist from "./coffelist";
import { useState } from "react";
const Body = () => {
  let [coftea, setcoftea] = useState(true);
  return (
    <div>
      <button onClick={() => setcoftea((coftea = true))}>Coffee</button>
      <button onClick={() => setcoftea((coftea = false))}>Tea</button>
      {coftea ? <coffelist /> : <h1>tea</h1>}
    </div>
  );
};

export default Body;
