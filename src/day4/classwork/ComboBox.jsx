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
  { label: "Orange", year: 1972 },
  { label: "Strawberry", year: 1974 },
  { label: "Pineapple", year: 2008 },
  { label: "Guava", year: 1957 },
  { label: "Grapes", year: 1993 },
  { label: "Banana", year: 1994 },
  { label: "JackFruit", year: 1994 },
  { label: "WaterMelon", year: 1994 },
  { label: "Plum", year: 1994 },
];
