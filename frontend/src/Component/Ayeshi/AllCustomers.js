import "./CSS/AllCustomers.css";

import React, { Component } from "react";
import axios from "axios";


export default class AllCustomers extends Component {
  constructor(props) {
    super(props);

    this.state = {
        customers: [],
    };
  }

  componentDidMount() {
    this.retrivePosts();
  }

  retrivePosts() {
    axios.get("http://localhost:8001/AllCustomers").then((res) => {
      if (res.data.success) {
        this.setState({
            customers: res.data.existingPosts,
        });
        console.log(this.state.customers);
      }
    });
  }

  filterData(customers, searchKey) {
    const result = customers.filter(
      (pdf) => pdf.name.includes(searchKey) || pdf.email.includes(searchKey)
    );
    this.setState({ customers: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/AllCustomers").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  onDelete = (id) => {
    axios.delete(`http://localhost:8001/deletecustomer/${id}`).then((res) => {
      alert("Delete Successfully");
      this.retrivePosts();
    });
  };

 
  render() {
    return (
      <div>
        <br />

        <center>
          <h1>All Customers Details</h1>
          <br />

          <div className="search" style={{ width: "400px" }}>
            <lable>Search :</lable>

            <input
              type="search"
              class="form-control"
              name="searchQuary"
              placeholder="Enter Name or Email"
              onChange={this.handleSearchArea}
            />
          </div>
          <br />

          <div class="recent-orders">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Customer Name</th>
                  <th>Customer Email</th>
                  <th>Customer Mobile</th>
                  <th>Nation</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                {this.state.customers.map((customers, index) => (
                  <tr>
                    <th>{index + 1}</th>

                    <td>{customers.name}</td>
                    <td>{customers.email}</td>
                    <td>{customers.mobile}</td>
                    <td>{customers.nation}</td>
                    
                    <td>
                      <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => this.onDelete(customers._id)}
                      >
                        <i className="fas fa-trash-alt"></i> Delete
                      </button>
                    </td>

                    
                  </tr>
                ))}
              </tbody>
            </table>
            <a href="/NationPieChart">
            <div className="row">
                <div className="cus-dashboard">
                <span class="material-icons-sharp">report</span>
                    <h2>Customer Report</h2>
                </div>
            </div>
            </a>
          </div>
        </center>
      </div>
    );
  }
}
