import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

import { labelStyle, radioStyle } from "./ComponentStyles";

const Where = (props) => {
  return (
    <>
      <FormControl style={radioStyle}>
        <FormLabel id="demo-row-radio-buttons-group-label" style={labelStyle}>
          Where?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          value={props.location}
          name={props.name}
          onChange={(e) => props.handleFormInput(e)}
        >
          <FormControlLabel value="phone" control={<Radio />} label="Phone" />
          <FormControlLabel
            value="googleMeet"
            control={<Radio />}
            label="Google Meet"
          />
        </RadioGroup>
      </FormControl>
    </>
  );
};

export default Where;
