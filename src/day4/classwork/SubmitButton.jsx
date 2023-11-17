import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ContainedButtons() {
  return (
      <Button
        variant="contained"
        onClick={() => {
          <p>{nam}</p>;
        }}
      >
        SUBMIT
      </Button>
    </Stack>
  );
}
