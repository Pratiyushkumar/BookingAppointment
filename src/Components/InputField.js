import React from "react";
import { TextField } from "@mui/material";
import { inputFieldStyle } from "./ComponentStyles";

const InputField = (props) => {
  return (
    <>
      <TextField
        id="filled-basic"
        label={props.label}
        variant="filled"
        fullWidth
        style={inputFieldStyle}
        type={props.type}
        name={props.name}
        onChange={(e) => props.handleFormInput(e)}
      />
    </>
  );
};

export default InputField;
