import "../Pamitha/CSS/EmployeeRegister.css";
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import attendance from "./image/attendance.jpg";
import success from "./image/success.png";

import Alert from "react-bootstrap/Alert";

const schema = yup
  .object({
    name: yup.string().required("Name Field is Empty"),
    IDNO: yup.number().positive().integer().required().min(9),
    
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

  const current = new Date();
  const ddate = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;

  const today = new Date();
  const ttime = `${
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  }`;

  const [name, setname] = useState("");
  const [IDNO, setIDNO] = useState("");
  const [date] = useState(ddate);
  const [time] = useState(ttime);
  const [show, setShow] = useState(false);

  const passData = (data) => {
    const attendance = {
      name,
      IDNO,
      date,
      time,
    };

    console.log(data);
    
    console.log(data.name);

    axios
      .post("http://localhost:8001/Attendancesave", data)
      .then(()=>{
         alert("Employee Attendance Mark");
        
      setShow(true);

   })
      .catch((err) => {
        alert(err);
      });
  }

   if (show) {
    return (
      // <Alert variant="success" onClose={() => setShow(false)} dismissible>
      //   <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      
      <div>
        <br/>
        <br/>
        <div className="success">
        <center>
        <img src={success} className="empsuccessimg" />
        <br/>
        <h1>Attendance Marks Successfully</h1>
        <br />
        <h3>Name is {name}</h3>
        <br />
        <h3>IDNO is {IDNO}</h3>
        <br />
        <h3>Today is : {ddate}</h3>
        <br />
        <h3>Current Time is : {ttime}</h3>
        <br />
        <a href="/hotelgreen">
        <button className="btn btn-success">Log out</button>
        </a>
        <br />
        <br />
       
        </center>
        </div>
        </div>
      // </Alert>
    );
  }
  

  return (
    <div className="row">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <center>
        <h1>Welcome Employee Today is {ddate}</h1>
        <h2>Have a nice day !</h2>
      </center>
      <div className="col-md-7">
        <center>
          <form onSubmit={handleSubmit(passData)}>
            <h1>Employee Attendance</h1>
            <br />

            <TextField
              id="outlined-basic"
              label="Enter name"
              variant="outlined"
            
              fullWidth
              style={{ width: "400px" }}
              onChange={(e) => {
                setname(e.target.value);
              }}
              {...register("name", { required: true })}
            />
             <p style={{ color: "red" }}>{errors.name?.message}</p>
           
        
            <TextField
              label="Enter IDNO"
              type="text"
              id="outlined-start-adornment"
              style={{ width: "400px" }}
              
              onChange={(e) => {
                setIDNO(e.target.value);
              }}
              {...register("IDNO", { required: true })}
            />
            <p style={{ color: "red" }}>{errors.IDNO?.message}</p>
           
        
            <h3>Today is : {ddate} </h3>
            <input value={ddate} type="hidden"  {...register("date", { required: true })} />
            <p style={{ color: "red" }}>{errors.date?.message}</p>
         
            <h3>Current Time is : {ttime}</h3>
            <input value={ttime} type="hidden"  {...register("time", { required: true })} />
            <p style={{ color: "red" }}>{errors.time?.message}</p>
            <br />

            <Button
              type="submit"
              variant="contained"
              // onClick={() => setShow(true)}
            >
              Send
            </Button>
          </form>
        </center>
      </div>
      <div className="col-md-3">
        <img src={attendance} className="attendanceimage" />
      </div>
    </div>
  );
}
