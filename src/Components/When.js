import React from "react";
import { TextField } from "@mui/material";

const When = (props) => {
  return (
    <>
      <TextField
        id="datetime-local"
        label="When?"
        type="datetime-local"
        defaultValue=""
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
        name={props.name}
        value={props.when}
        onChange={(e) => props.handleFormInput(e)}
      />
    </>
  );
};

export default When;
