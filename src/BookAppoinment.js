import React, { useState } from "react";
import { Grid, Paper, Button } from "@mui/material";
import axios from "axios";
import { buttonStyle, paperstyle } from "./styles";
import InputField from "./Components/InputField";
import Doctors from "./Components/Doctors";
import Where from "./Components/Where";
import When from "./Components/When";

const BookAppoinment = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    doctor: "",
    where: "",
    when: "",
  });
  const [isdisplay, setIsDisplay] = useState(true);
  const [isSchedule, setIsSchedule] = useState(true);

  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleButtonClick = async () => {
    setIsSchedule(false);
    try {
      const url = "https://jsonplaceholder.typicode.com/posts";
      const urlResponse = await axios.post(url, formData);
      setIsDisplay(false);
      setIsSchedule(true);
      return urlResponse;
    } catch (error) {
      return null;
    }
  };

  const cancelBtn = () => {
    setIsDisplay(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      doctor: "",
      where: "",
      when: "",
    });
  };

  return (
    <>
      <Grid>
        <Paper elevation={4} style={paperstyle}>
          {isdisplay ? (
            <>
              <h1>Book an session</h1>
              <p>
                Fill in the form below to book a virtual session with your
                doctor
              </p>

              {isSchedule ? (
                <>
                  <h5>Basic Info</h5>
                  <InputField
                    label="First Name"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    handleFormInput={handleFormInput}
                  />
                  <InputField
                    label="Last Name"
                    type="text"
                    value={formData.lastName}
                    name="lastName"
                    handleFormInput={handleFormInput}
                  />
                  <InputField
                    label="Email"
                    type="email"
                    value={formData.email}
                    name="email"
                    handleFormInput={handleFormInput}
                  />
                  <Doctors
                    doc={formData.doctor}
                    name="doctor"
                    onDoctorSelect={handleFormInput}
                  />
                  {formData.doctor !== "" ? (
                    <>
                      <Where
                        style={{ margin: "10px auto" }}
                        location={formData.where}
                        handleFormInput={handleFormInput}
                        name="where"
                      />
                      <When
                        time={formData.when}
                        handleFormInput={handleFormInput}
                        name="when"
                      />
                    </>
                  ) : null}

                  <Button
                    variant="contained"
                    style={buttonStyle}
                    fullWidth
                    onClick={handleButtonClick}
                  >
                    Confirm Booking
                  </Button>
                </>
              ) : (
                <>
                  <h1>Scheduling the Appointment....</h1>
                </>
              )}
            </>
          ) : (
            <>
              <h1>Appointment Booked Successfully...</h1>
              <Button
                variant="contained"
                style={buttonStyle}
                fullWidth
                onClick={cancelBtn}
              >
                Cancel Booking
              </Button>
            </>
          )}
        </Paper>
      </Grid>
    </>
  );
};

export default BookAppoinment;
