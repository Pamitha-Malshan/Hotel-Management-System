import "../Pamitha/CSS/EmployeeRegister.css";
import employeepic from "./image/employee.jpg";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm} from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import SendIcon from "@mui/icons-material/Send";

import {
  Button,
  Radio,
  FormControlLabel,
  TextField,
  RadioGroup,
  FormLabel,
} from "@mui/material";

const schema = yup
  .object({
    name: yup.string().required("Name Field is Empty").min(5),
    email: yup.string().required().email(),
    age: yup.number().required("Age Field is Empty").min(18).max(50),
    IDNO: yup.string().required("IDNO Field is required").min(10),
    role: yup.string().required("Job Role Field is Empty"),
  })
  .required();

export default function FormPropsTextFields() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [IDNO, setIDNO] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [role, setrole] = useState("");

  let navigate = useHistory();

  const passData = (data) => {
    const emp = {
      name,
      email,
      IDNO,
      age,
      gender,
      role,
    };

    console.log(data);

    axios
      .post("http://localhost:8001/save", data)
      .then(() => {
        alert("Add New Employee");
      
        setname("");
        setemail("");
        setIDNO("");
        // navigate.push('/hotelgreen');
        window.location = "/Employeeregister";
      })
      .catch((err) => {
        alert(err);
      });

     
  };

  return (
    <div className="row">
      <div className="col-md-8">
        <center>
          <form onSubmit={handleSubmit(passData)}>
            <h1>Employee registration</h1>
            <br />

            <TextField
              id="name"
              label="Enter Employee Name"
              variant="outlined"
              fullWidth
              style={{ width: "60%" }}
              onChange={(e) => {
                setname(e.target.value);
              }}
              {...register("name", { required: true })}
            />
           

            <p style={{ color: "red" }}>{errors.name?.message}</p>
          
            <TextField
              label="Enter employee email"
              type="email"
              id="email"
              style={{ width: "60%" }}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              {...register("email", { required: true })}
            />
            
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          
            <TextField
              label="Enter employee National ID Number"
              type="text"
              id="IDNO"
              style={{ width: "60%" }}
              onChange={(e) => {
                setIDNO(e.target.value);
              }}
              {...register("IDNO", { required: true })}
            />
         

            <p style={{ color: "red" }}>{errors.IDNO?.message}</p>
            
            <TextField
              label="Enter Employee Age"
              type="number"
              id="age"
              style={{ width: "60%" }}
              onChange={(e) => {
                setage(e.target.value);
              }}
              {...register("age", { required: true })}
            />
           

            <p style={{ color: "red" }}>{errors.age?.message}</p>
           

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              className="redio"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                onChange={(e) => {
                  setgender(e.target.value);
                }}
                {...register("gender", { required: true })}
              />

              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onChange={(e) => {
                  setgender(e.target.value);
                }}
                {...register("gender", { required: true })}
              />
            </RadioGroup>

          
            <TextField
              label="Enter Employee Job Role"
              type="text"
              id="role"
              style={{ width: "60%" }}
              onChange={(e) => {
                setrole(e.target.value);
              }}
              {...register("role", { required: true })}
            />
            
         
            <p style={{ color: "red" }}>{errors.role?.message}</p>
          
            <br />
            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        </center>
      </div>
      <div className="col-md-4">
        <center>
          <div className="empdes">
            <img src={employeepic} className="employeeimg" />

            <h3>
              We are looking high quality customer service and very friendly
              customer service from you.
            </h3>
            <br />
            <span class="material-icons-sharp">star_half</span>
            <span class="material-icons-sharp">star_half</span>
            <span class="material-icons-sharp">star_half</span>
            <span class="material-icons-sharp">star_half</span>
            <span class="material-icons-sharp">star_half</span>
          </div>
        </center>
      </div>
    </div>
  );
}
