import React from "react";
import { useState } from "react";
import Button from "./components/Button";

const Runs = () => {
  const [runs, updater] = useState(0);
  const [wicket, update] = useState(0);
  return (
    <div>
      <h1>RUN {runs}</h1>
      <h1>WICKET {wicket}</h1>
      <button
        className=""
        onClick={() => {
          updater(runs + 1);
          {
            console.log(runs);
          }
        }}
      >
        1 runs
      </button>
      <button
        className=""
        onClick={() => {
          updater(runs + 2);
          {
            console.log(runs);
          }
        }}
      >
        2 runs
      </button>
      <button
        className=""
        onClick={() => {
          updater(runs + 4);
          {
            console.log(runs);
          }
        }}
      >
        4 runs
      </button>
      <button
        className=""
        onClick={() => {
          updater(runs + 6);
          {
            console.log(runs);
          }
        }}
      >
        6 runs
      </button>
      <button
        className=""
        onClick={() => {
          update(wicket + 1);
          {
            console.log(wicket);
          }
        }}
      >
        Wicket
      </button>
    </div>
  );
};

export default Runs;
