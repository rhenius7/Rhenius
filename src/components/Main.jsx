import React from "react";

const Main = () => {
  return (
    <div>
      <hr></hr>
      <label for="name">User name:</label>
      <input type="text" id="name"></input>
      <br></br>
      <br></br>
      <label for="pass">Password:</label>
      <input type="password" id="pass"></input>
      <br></br>
      <br></br>
      <button>Submit</button>
      <hr></hr>
    </div>
  );
};

export default Main;
