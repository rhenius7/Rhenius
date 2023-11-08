import React from "react";
import { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!isVisible);
          {
            console.log(isVisible);
          }
        }}
      >
        ShowMessage
      </button>
      {isVisible === true ? <p>Hello World</p> : null}
    </div>
  );
};

export default ToggleMessage;
