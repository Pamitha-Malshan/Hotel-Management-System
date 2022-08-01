import "../Pamitha/CSS/EmployeeRegister.css";

import * as React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";


export default function FormPropsTextFields() {
  return (
    <div>
      <center>
        <form>
          <h1>Employee Attendance</h1>
          <br />

          <TextField
            id="outlined-basic"
            label="Item Name"
            variant="outlined"
            required
            fullWidth
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <TextField
            label="Enter employer email"
            type="email"
            id="outlined-start-adornment"
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <TextField
            label="Enter employer national ID number"
            type="text"
            id="outlined-start-adornment"
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <TextField
            label="Enter employer age"
            type="number"
            id="outlined-start-adornment"
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <TextField
            label="Enter employer gender"
            type="number"
            id="outlined-start-adornment"
            style={{ width: "400px" }}
          />
          <br />
          <br />
          <TextField
            label="Enter employer job roll"
            type="text"
            id="outlined-start-adornment"
            style={{ width: "400px" }}
          />
          <br />
          <br />

          <Button variant="contained">Send</Button>
        </form>
      </center>
    </div>
  );
}
