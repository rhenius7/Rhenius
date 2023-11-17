import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <>
      <h1>Enter your name and Favourite Fruit!</h1>
      <br></br>
      <h4>
        Name : <input type="text" />
      </h4>
      <br></br>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Fruits}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Search your Fruit here!" />
        )}
      />
    </>
  );
}
const Fruits = [
  { label: "Apple", year: 1994 },
  { label: "Banana", year: 1972 },
  { label: "Cherry", year: 1974 },
  { label: "Duarian", year: 2008 },
  { label: "ElderBerry", year: 1957 },
];
