import "./CSS/CustomerSignup.css";
import React, { Component } from "react";
import axios from "axios";


export default class CustomerSignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile:"",
      password: "",
      cpassword: "",
      
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

    const { name, email,mobile, password, cpassword } = this.state;
    if (password === cpassword) {
      const data = {
        name: name,
        email: email,
        mobile: mobile,
        password: password,
        cpassword: cpassword,
      
      };
      console.log(data);

      axios
        .post("http://localhost:8001/CustomerSignup", data)
        .then((res) => {
          alert("Registration successful!");
          this.props.history.push(`/CustomerSignin`);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          alert("Please check your username and password");
        });
    } else {
      alert("Your password not match");
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <center>
            <div className="customer-image-container">
              <div class="cus-form-container">
                <div class="cus-signin-cus-signup">
                  <form action="" class="cus-sign-up-form">
                    <h2 class="title">Sign Up</h2>
                    <div class="cus-input-field">
                      <i class="fa-solid fa-user"></i>
                      <input
                        type="text"
                        placeholder="Username"
                        id="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div class="cus-input-field">
                    <i class="fa-solid fa-envelope"></i>
                      <input
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div class="cus-input-field">
                      <i class="fa-solid fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <div class="cus-input-field">
                      <i class="fa-solid fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        id="cpassword"
                        name="cpassword"
                        value={this.state.cpassword}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="cus-input-field">
                    <i class="fa-solid fa-phone"></i>
                      <input
                        type="mobile"
                        placeholder="Mobile Number"
                        id="mobile"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  
    

                    <div>

                    <input
                      type="submit"
                      value="Sign up"
                      class="button solid"
                      onClick={this.onSubmit}
                    />
                    </div>

                    <div className="col-md-5">
          <div>
              <p>
                IF you are allready registered, let's sign in here.
            <a href="/CustomerSignin">
                Sign In</a>
              </p>
            </div>
          </div>
       

                    
                  </form>
                </div>
              </div>
            </div>
          </center>
        </div>

        
      </div>
    );
  }
}
