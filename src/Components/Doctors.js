import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const Doctors = (props) => {
  return (
    <>
      <FormControl variant="filled" fullWidth>
        <InputLabel id="demo-simple-select-label">Doctors</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name={props.name}
          value={props.doc}
          label="Doctors"
          onChange={(e) => props.onDoctorSelect(e)}
        >
          <MenuItem value="JOHN_HOPKINS">Dr. John Hopkins</MenuItem>
          <MenuItem value="MAYA_MARIN">Dr. Maya Marin</MenuItem>
          <MenuItem value="DONNA_DOUGLAS">Dr. Donna Douglas</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Doctors;
