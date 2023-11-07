import React from "react";

const Main = () => {
  return (
    <div
      style={{
        fontSize: "40px",
        color: "blue",
        height: "200px",
        padding: "150px",
      }}
    >
      <center>
        <label for="name">User name </label>
        <input
          type="text"
          id="name"
          style={{ height: "30px", width: "300px" }}
        ></input>
        <br></br>
        <br></br>
        <label for="pass">Password </label>
        <input
          type="password"
          id="pass"
          style={{ height: "30px", width: "300px" }}
        ></input>
        <br></br>
        <br></br>
        <button
          style={{
            height: "30px",
            color: "green",
            backgroundColor: "black",
            width: "100px",
            borderRadius: "30px",
          }}
        >
          Submit
        </button>
      </center>
    </div>
  );
};

export default Main;
