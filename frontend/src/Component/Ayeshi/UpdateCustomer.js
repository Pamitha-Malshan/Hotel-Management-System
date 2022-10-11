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



export default class UpdateCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mobile:"",
      nation:""
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
    const { name,mobile,nation } = this.state;

    const data = {
      name: name,
      mobile:mobile,
      nation:nation,
    };
    console.log(data);

    axios.put(`http://localhost:8001/UpdateCustomer/${id}`, data).then((res) => {
      if (res.data.success) {
        alert("Customer Updated Successfully");
       window.location = "/AllCustomers";
        
      }
    }); 
  };

  componentDidMount(){
  
    const id = this.props.match.params.id ;

    axios.get(`http://localhost:8001/AllCustomers/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          name:res.data.post.name,
          mobile:res.data.post.mobile,
          nation:res.data.post.nation,
         
          
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
        mobile: {
          number: true,
          minlength: 10,
          required: true,
        },
        nation: {
          required: true,
        },
      },
      messages: {
        name: {
          required: "Name Field is Empty",
        },
        mobile: {
          required: "Age Field is Empty",
          number: "Only Decimal Numbers allowed",
        
        },
        nation: {
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
          <h1>Update Customer</h1>
        </center>
        <br />
        <div style={{ paddingLeft: "15%" }}>
          <label for="roomName" className="form-label">
            Update Customer Name :{" "}
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
            Update Employee Mobile :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="mobile"
            name="mobile"
            value={this.state.mobile}
            onChange={this.handleInputChange}
            required
            style={{ width: "70%", height: "40px" }}
          />
          <br />


          <label for="roomName" className="form-label">
            Update Customer Nation :{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="nation"
            name="nation"
            value={this.state.nation}
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

