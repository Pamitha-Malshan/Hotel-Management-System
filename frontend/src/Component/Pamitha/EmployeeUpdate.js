import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";

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
    IDNO: yup.number().positive().integer().required(),
    role: yup.string().required("Job Role Field is Empty"),
  })
  .required();


  export default function EditMark() {

    const { id } = useParams();
  console.log(id);

    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    const [student, setStudent] = useState([]);
    const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [IDNO, setIDNO] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [role, setrole] = useState("");


  useEffect(() => {
    axios.get(`http://localhost:8001/get/${id}`).then((response) => {
      setStudent(response.data.existingStudent);

      setname(response.data.existingEmployee.name);
      setemail(response.data.existingEmployee.email);
      setIDNO(response.data.existingEmployee.IDNO);
      setage(response.data.existingEmployee.age);
      setgender(response.data.existingEmployee.gender);
      setrole(response.data.existingEmployee.role);
    });
  }, []);

  const passData = (data) => {

    // e.preventDefault();
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
      .put(`http://localhost:8001/update/${id}`, data)
      .then(() => {
        alert("Update Employee");

        window.location = '/EmployeeView';
      })
      .catch((err) => {
        alert(err);
      });
  };

    return (
      <div>
        <br />
        <center>
          <form onSubmit={handleSubmit(passData)}>
            <h1>Employee registration</h1>
            <br />

            <TextField
              label="Enter employer email"
              type="text"
              id="name"
              name="name"
              style={{ width: "60%" }}
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              
            />
           <br/>
           <br/>

            <p style={{ color: "red" }}>{errors.name?.message}</p>
          
            <TextField
              label="Enter employer email"
              type="email"
              id="email"
              name="email"
              style={{ width: "60%" }}
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            
            />
             <br/>
             <br/>
            {/* <p style={{ color: "red" }}>{errors.email?.message}</p> */}
          
            <TextField
              label="Enter employer national ID number"
              type="text"
              id="IDNO"
              style={{ width: "60%" }}
              value={IDNO}
              onChange={(e) => {
                setIDNO(e.target.value);
              }}
             
            />
          <br/>
          <br/>

            {/* <p style={{ color: "red" }}>{errors.IDNO?.message}</p> */}
            
            <TextField
              label="Enter employer age"
              type="number"
              id="age"
              style={{ width: "60%" }}
              value={age}
              onChange={(e) => {
                setage(e.target.value);
              }}
          
            />
            <br/>

            {/* <p style={{ color: "red" }}>{errors.age?.message}</p> */}
           

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
              className="redio"
              value={gender}
              style={{marginLeft:"90px"}}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"

                onChange={(e) => {
                  setgender(e.target.value);
                }}
             
              />
             
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                onChange={(e) => {
                  setgender(e.target.value);
                }}
               
              />
            </RadioGroup>
            <br/>

          
            <TextField
              label="Enter employer job role"
              type="text"
              id="role"
              style={{ width: "60%" }}
              value={role}
              onChange={(e) => {
                setrole(e.target.value);
              }}
             
            />
             <br/>
         
            {/* <p style={{ color: "red" }}>{errors.role?.message}</p> */}
          
            <br />
            <Button type="submit" variant="contained">
              Send
            </Button>
          </form>
        </center>
        <br />
      </div>
    );
  }

