import "../Pamitha/CSS/EmployeeView.css";

import React, { Component } from "react";
import axios from "axios";

export default class GetMark extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Employer: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/getemployee").then((res) => {
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
      (pdf) => pdf.name.includes(searchKey) || pdf.IDNO.includes(searchKey)
    );
    this.setState({ Employer: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/getemployee").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  onDelete = (id) => {
    axios.delete(`http://localhost:8001/deleteemployee/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };

  render() {
    return (
      <div>
        <br />

        <center>
          <h1>Employee Registration Details</h1>
          <br />

          <div className="search" style={{ width: "400px" }}>
            <lable>Search :</lable>

            <input
              type="search"
              class="form-control"
              name="searchQuary"
              placeholder="Enter Name or IDNO"
              onChange={this.handleSearchArea}
            />
          </div>
          <br />

          <div class="recent-orders">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Employee Name</th>
                  <th>Employee EMAIL</th>
                  <th>Employee IDNO</th>
                  <th>Employee Age</th>
                  <th>Employee Gender</th>
                  <th>Employee Role</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.Employer.map((Employer, index) => (
                  <tr>
                    <th>{index + 1}</th>

                    <td>{Employer.name}</td>
                    <td>{Employer.email}</td>
                    <td>{Employer.IDNO}</td>
                    <td>{Employer.age}</td>
                    <td>{Employer.gender}</td>
                    <td>{Employer.role}</td>

                    <td>
                      <a href={`/Employeeupdate/${Employer._id}`}>
                        <button type="button" className="btn btn-success">
                          <i className="fas fa-edit"></i> Update
                        </button>
                      </a>
                    </td>
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
    );
  }
}
