import { Autocomplete } from "@mui/material";
import React, { useState } from "react";

const Q3 = () => {
  const [value, setvalue] = useState("");
  console.log(value);
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setvalue(...value, event.target.value);
        }}
      >
        <center>
          <h4>Name :</h4>
          <input
            type="text"
            placeholder="Enter your name"
            autoComplete="off"
            name="name"
            onChange={(event) => setvalue(event.target.value)}
          ></input>
          <br></br>
          <h4>email :</h4>
          <input
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
            name="email"
          ></input>
          <br></br>
          <h4>Message :</h4>
          <input
            type="text"
            placeholder="Enter your Feedback"
            autoComplete="off"
            name="Message"
          ></input>
          <br></br>
          <button type="submit">Submit</button>
        </center>
      </form>
      <br></br>
      <center>
        <h4>{value}</h4>
      </center>
    </div>
  );
};

export default Q3;
