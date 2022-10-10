import React, { Component } from "react";
import axios from "axios";
import $ from "jquery";
import "jquery-validation";

import { useParams, useHistory } from "react-router-dom";

import {
  Button,
  Radio,
  FormControlLabel,
  TextField,
  RadioGroup,
  FormLabel,
} from "@mui/material";

// export default function EditMark() {
//   const { id } = useParams();
//   console.log(id);

//   const [student, setStudent] = useState([]);
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [IDNO, setIDNO] = useState("");
//   const [age, setage] = useState("");
//   const [gender, setgender] = useState("");
//   const [role, setrole] = useState("");

//   let navigate = useHistory();

//   useEffect(() => {
//     axios.get(`http://localhost:8001/get/${id}`).then((response) => {
//       setStudent(response.data.existingStudent);

//       setname(response.data.existingEmployee.name);
//       setemail(response.data.existingEmployee.email);
//       setIDNO(response.data.existingEmployee.IDNO);
//       setage(response.data.existingEmployee.age);
//       setgender(response.data.existingEmployee.gender);
//       setrole(response.data.existingEmployee.role);
//     });
//   }, []);

//   function passData() {
//     const emp = {
//       name,
//       email,
//       IDNO,
//       age,
//       gender,
//       role,
//     };

//     console.log(emp);

//     axios
//       .put(`http://localhost:8001/update/${id}`, emp)
//       .then((res) => {
//         if (res.data.success) {
//           alert(" Updated Successfully");
          
//         }
//         // alert("Update Successful");
//         // window.location = "/EmployeeView";
//         // navigate.push('/hotelgreen');
//       })

//   }

export default class EditMark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      IDNO: "",
      age: "",
      gender: "",
      role: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    const { name,email,IDNO,age,gender,role } = this.state;

    const data = {
      name: name,
      email: email,
      IDNO: IDNO,
      age: age,
      gender: gender,
      role: role
    };
    console.log(data);

    axios.put(`http://localhost:8001/update/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Employee Updated Successfully");
       window.location = "/EmployeeView";
        
      }
    }); 
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:8001/get/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          name:res.data.post.name,
          email:res.data.post.email,
          IDNO:res.data.post.IDNO,
          age:res.data.post.age,
          gender:res.data.post.gender,
          role:res.data.post.role,
          
        });
        console.log(this.state);
      }
    }); 



  
    const createRoomForm = $("#form");

    createRoomForm.validate({
      rules: {
        name: {
          lettersonly: true,
          required: true,
        },
        Email: {
          required: true,
        },
        IDNO: {
          number: true,
          minlength: 9,
          required: true,
        },
        age: {
          number: true,
          required: true,
          min: 18,
          max: 50,
        },
        gender: {
          required: true,
        },
        role: {
          required: true,
        },
      },
      messages: {
        name: {
          lettersonly: "Please enter letters only",
          required: "Name Field is Empty",
        },
        email: {
          required: "Email Field is Empty",
        },
        IDNO: {
          required: "IDNO Field is Empty",
          number: "Only Decimal Numbers allowed",
          minlength: "Amount should be more than 9",
        },
        age: {
          required: "Age Field is Empty",
          number: "Only Decimal Numbers allowed",
          min: "Age cannot be less than 18",
          max: "Age cannot be greater than 50",
        },
        role: {
          required: "Room Field is Empty",
        },
      }
    })

  }


render() {
  return (
    <div>
      <br />

      <form
        onSubmit={this.onSubmit}
        style={{ width: "800px", marginLeft: "20%" }}
        encType="multipart/form-data"
        id="form"
      >
        <center>
          <h1>Employee registration</h1>
        </center>
        <br />
        <div style={{ paddingLeft: "15%" }}>
          <label for="roomName" className="form-label">
            Update Employee Name :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
            style={{ width: "70%", height: "40px" }}
          />

          <br />

          <label for="roomName" className="form-label">
            Update Employee Email :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
            style={{ width: "70%", height: "40px" }}
          />
          <br />

          <label for="roomName" className="form-label">
            Update Employee IDNO :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="IDNO"
            name="IDNO"
            value={this.state.IDNO}
            onChange={this.handleInputChange}
            required
            style={{ width: "70%", height: "40px" }}
          />
          <br />

          <label for="roomName" className="form-label">
            Update Employee Age :{" "}
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={this.state.age}
            onChange={this.handleInputChange}
            required
            style={{ width: "70%", height: "40px" }}
          />
          <br />

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            className="redio"
            value={this.state.gender}
            onChange={this.handleInputChange}
            style={{ marginLeft: "-20%" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
              // onChange={this.handleInputChange}
            />

            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Male"
              // onChange={this.handleInputChange}
            />
          </RadioGroup>

          {/* <rediogroup
value={gender}
defaultValue="female"
name="radio-buttons-group"
type="radio"
>

<div class="form-check">
  <input class="form-check-input" type="radio" name="female" id="female"
   value="female"

  onChange={(e) => {
    setgender(e.target.value);
  }}
 
  />
  <label class="form-check-label" for="flexRadioDefault1">
    Female
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="male" id="male" 
   value="male"
  onChange={(e) => {
    setgender(e.target.value);
  }}
 
  />
  <label class="form-check-label" for="flexRadioDefault2">
    male
  </label>
</div>
</rediogroup> */}
          <br />

          <label for="roomName" className="form-label">
            Update Employee Role :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="role"
            name="role"
            value={this.state.role}
            onChange={this.handleInputChange}
            required
            style={{ width: "70%", height: "40px" }}
          />
          <br />
        </div>

        <br />
        <center>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </center>
      </form>

      <br />
    </div>
  );
          }
        }

