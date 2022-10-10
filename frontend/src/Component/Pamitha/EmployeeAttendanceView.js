import "../Pamitha/CSS/EmployeeView.css";


import React, { Component } from "react";
import axios from "axios";

export default class GetMark extends Component {
  constructor(props) {
    super(props);

    var today = new Date(),
    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

   

    this.state = {
      Employer: [],
      currentDate: date,
      currentTime: time,
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getattendance").then((res) => {
      if (res.data.success) {
        this.setState({
          Employer: res.data.existingPosts,
        });
        console.log(this.state.Employer);
      }
    });
  }

  filterData(Employer, searchKey) {
    const result = Employer.filter(
      (pdf) => pdf.date.includes(searchKey) 
    );
    this.setState({ Employer: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/getattendance").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  onDelete = (id) => {
    axios.delete(`http://localhost:8001/deleteattendance/${id}`).then((res) => {
      alert("Attendaance Record Delete Successfully");
      this.retrivePosts();
    });
  };

   

  render() {
    return (
      <div className="row">
        <br />
       
        <div className="timedate">
          <p>Employee Dashboard</p>
          <p>Date : { this.state.currentDate }</p>
          <p>Time : { this.state.currentTime }</p>
          </div>

       
        <div className="col-md-9">

        <center>
          <h1>Employee Attendance Details</h1><br/>

          <div className="search" style={{ width: "400px" }}>
          <lable>Search :</lable>
          <input
            type="text"
            class="form-control"
            name="searchQuary"
            placeholder="Enter Date"
            onChange={this.handleSearchArea}
          />
        </div>
        <br />
        </center>
        <a href="/Employeeattendance">
            <h3 style={{color:"green", paddingLeft:"35px"}}>Employee Attendance Mark Page</h3>
        </a>
        <center>
    <div class="recent-orders">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Employee Name</th>
              <th>Employee IDNO</th>
              <th> Date</th>
              <th> Time</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.Employer.map((Employer, index) => (
              <tr>
                <th >{index + 1}</th>
                
                <td>{Employer.name}</td>
                <td>{Employer.IDNO}</td>
                <td>{Employer.date}</td>
                <td style={{color:"blue"}}>{Employer.time}</td>

                  <td>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => this.onDelete(Employer._id)}
                  >
                    <i className="fas fa-trash-alt"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        </div>
        </center>
        </div>
        
        <div className="col-md-2">
        <center>
        <a href="/EmployeeView">
            <div className="row">
           
                <div className="dashboard">
                <span class="material-icons-sharp">groups</span>
                    <h2 className="right-menu">Employee Details</h2>
                </div>
              
            </div>
            </a>

            <a href="/Employeeregister">
            <div className="row">
                <div className="dashboard">
                <span class="material-icons-sharp">how_to_reg</span>
                    <h2>Employee Registration</h2>
                </div>
            </div>
            </a>
             <a href="/Employeeattendance">
            <div className="row">
                <div className="dashboard">
                <span class="material-icons-sharp">task_alt</span>
                    <h2>Employee Attendance</h2>
                </div>
            </div>
            </a>
            <a href="/Employeereport">
            <div className="row">
                <div className="dashboard">
                <span class="material-icons-sharp">report</span>
                    <h2>Employee Report</h2>
                </div>
            </div>
            </a>
            </center>
        </div>
      
      </div>
    );
  }
}
