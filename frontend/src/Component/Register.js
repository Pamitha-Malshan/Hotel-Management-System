import "../CSS/Register.css";
import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      Repassword: "",
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

    const { name, email, password, Repassword } = this.state;
    if (password == Repassword) {
      const data = {
        name: name,
        email: email,
        password: password,
        Repassword: Repassword,
      };
      console.log(data);

      axios
        .post("http://localhost:8001/register", data)
        .then((res) => {
          alert("Registration successful!");
          this.props.history.push(`/Signin`);
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
            <div className="container">
              <div class="form-container">
                <div class="signin-signup">
                  <form action="" class="sign-up-form">
                    <h2 class="title">Sign Up</h2>
                    <div class="input-field">
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

                    <div class="input-field">
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

                    <div class="input-field">
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

                    <div class="input-field">
                      <i class="fa-solid fa-lock"></i>
                      <input
                        type="password"
                        placeholder="Password"
                        id="Repassword"
                        name="Repassword"
                        value={this.state.Repassword}
                        onChange={this.handleInputChange}
                      />
                    </div>

                    <input
                      type="submit"
                      value="Sign up"
                      class="button solid"
                      onClick={this.onSubmit}
                    />
                    <p class="social-text">
                      Or Sign up with social media platform
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
            </div>
          </center>
        </div>

        <div className="col-md-5">
          <div class="panel left-panel">
            <div class="content">
              <h1>One of us,</h1>
              <p>
                IF you are registered customer, let's sign in here and enjoy best with our service.
              </p>
              <a href="/Signin">
                <button class="button transparent" id="sign-in-button">
                  Sign In
                </button>
              </a>
            </div>
            {/* <!-- <img src="./image/register.jpg" class="image"> --> */}
          </div>
        </div>
      </div>
    );
  }
}
