import "./CSS/CustomerSignin.css";
import React, { Component } from "react";
import axios from "axios";

export default class CustomerSignin extends Component {

  constructor(props) {
    super(props);
    this.state = {
     
      email:"",
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
  
    const {  email, password } = this.state;

    const data = {
    
      email:email,
      password:password
     
    };
    console.log(data);

    axios.post("http://localhost:8001/CustomerSignin", data)
    .then(res => {
      alert("Customer Login successful!")
      this.props.history.push(`/CustomerProfile`)
      window.location.reload();
  }).catch(err => {
      console.log(err);
      alert('Please check your username and password')
  })
      }


render(){
  return (
    <div className="row">
      <div class="signin-container">
        <div className="col-md-5">
          <center>
            
          <div className="signin-image-container">
              <div class="sign-form-container">
            
              <div class="cus-signin-cus-signup">
                <form action="" class="sign-in-form">
                  <h2 class="title">Sign in</h2>
                  <div class="input-field">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" 
                    placeholder="Email"
                    id="email"
                    name='email'
                    value={this.state.email}
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

                  <div class="content">
              
              <p>
               Don't have an account ?
              </p>
              <a href="/CustomerSignup">
                
                  Sign Up
              </a>
            </div>
            

                  
                </form>
              </div>
            </div>
            </div>
          </center>
        </div>
        
      </div>
    </div>
  );
}
}

