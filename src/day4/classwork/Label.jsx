import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Choose Favourite Fruit
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={"Apple"}>Apple</MenuItem>
          <MenuItem value={"Banana"}>Banana</MenuItem>
          <MenuItem value={"Cherry"}>Cherry</MenuItem>
          <MenuItem value={"Duarian"}>Duarian</MenuItem>
          <MenuItem value={"ElderBerry"}>ElderBerrry</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}