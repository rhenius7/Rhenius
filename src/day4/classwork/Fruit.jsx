import {
  Button,
  Stack,
  Box,
  Typography,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Fruit = () => {
  const [fruit, setfruit] = useState("");
  const [name, setname] = useState("");
  const handleChange = (event) => {
    setfruit(event.target.value);
  };
  const handleOnChange = (event) => {
    setname(event.target.value1);
  };
  return (
    <Stack direction="column" spacing={2}>
      <Typography variant="h2">
        Enter your name and choose your Favourite Fruit:
      </Typography>
      <Typography>Name</Typography>
      <TextField variant="outlined" id="name"></TextField>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          Choose Favourite Fruit
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fruit}
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
      <Button
        variant="contained"
        onClick={() => {
          console.log(fruit);
          console.log();
        }}
      >
        SUBMIT
      </Button>
    </Stack>
  );
};

export default Fruit;
