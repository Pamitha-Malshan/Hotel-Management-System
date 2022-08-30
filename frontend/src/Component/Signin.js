import React, { Component } from "react";
import axios from "axios";

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
      name:"",
      password:"",
    
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
  
    const {  name, password } = this.state;

    const data = {
    
      name:name,
      password:password
     
    };
    console.log(data);

    axios.post("http://localhost:8001/Login", data)
    .then(res => {
      // alert("Admin Login successful!")
      this.props.history.push(`/Employeeattendanceview`)
      window.location.reload();
  }).catch(err => {
      console.log(err);
      alert('Please check your username and password')
  })
      }


render(){
  return (
    <div className="row">
      <div class="container">
        <div className="col-md-5">
          {/* <div class="panels-container"> */}
          <div class="panel left-panel">
            <div class="content">
              <h1>New Here?</h1>
              <p>
                IF you are new one for our grand hotel, let's sign up and experience our service.
              </p>
              <a href="/Register">
                <button class="button transparent" id="sign-up-button">
                  Sign Up
                </button>
              </a>
            </div>
            {/* <!-- <img src="./image/login.jpg" class="image"> --> */}
          </div>
          {/* </div> */}
        </div>
        <div className="col-md-5">
          <center>
            <div class="form-container">
              <div class="signin-signup">
                <form action="" class="sign-in-form">
                  <h2 class="title">Sign in</h2>
                  <div class="input-field">
                    <i class="fa-solid fa-user"></i>
                    <input type="text" 
                    placeholder="Username"
                    id="name"
                    name='name'
                    value={this.state.name}
                    onChange={this.handleInputChange} />
                  </div>

                  <div class="input-field">
                    <i class="fa-solid fa-lock"></i>
                    <input type="password"
                     placeholder="Password"  
                     id="password"
                     name='password'
                     value={this.state.password}
                     onChange={this.handleInputChange}/>
                  </div>

                  <input type="submit" value="Login" class="button solid"  onClick={this.onSubmit}/>
                  <p class="social-text">
                    Or Sign in with social media platform
                  </p>

                  <div class="social-media">
                    <a href="#" class="social-icon">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-icon">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon">
                      <i class="fa-brands fa-google"></i>
                    </a>
                    <a href="#" class="social-icon">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
}

