import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import "jquery-validation";
import "./css/style.css";
import ScrollImage from "./scrollimage";
import background from "./images/back2.jpg";

export default function OrderFood(props) {
  //--------get room name from props
  const FoodName = props.location.state.foodName;
  //--------get room amount from props
  const Price = props.location.state.Price;

  const [foodName, setFoodName] = useState(FoodName);
  const [quantity, setQuantity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  
  // const [total, setTotal] = useState("");

  useEffect(() => {
    //--------validate the room reservation form
    const OrderFoodForm = $("#reservation-form");

    OrderFoodForm.validate({
      rules: {
        quantity: {
          required: true,
          number: true,
        },
        firstName: {
          required: true,
          lettersonly: true,
        },
        lastName: {
          required: true,
          lettersonly: true,
        },
        email: {
          required: true,
          email: true,
        },
        phoneNumber: {
          required: true,
          minlength: 10,
          maxlength: 10,
          number: true,
        },
        
        address: {
          required: true,
        },
        
      },
      messages: {
        
        quantity: {
          required: "Please provide number of rooms",
          number: "Please enter only numbers",
        },
        firstName: {
          required: "Please provide first name",
          lettersonly: "Please enter only letters",
        },
        lastName: {
          required: "Please provide last name",
          lettersonly: "Please enter only letters",
        },
        email: {
          required: "Please provide email",
          email: "Please enter valid email",
        },
        phoneNumber: {
          required: "Please provide phone number",
          minlength: "Phone Number not less than 10 digits",
          maxlength: "Phone number not more than 10 digits",
          number: "Phone number must contain only numbers",
        },
        
        address: {
          required: "Please provide Address",
        },
       
      },
    });
  });

  //------------calculate the total amount
  const totalAmount = () => {
    return Price * quantity;
  };

  //-------function of clear the form field
  const clearForm = (e) => {
    e.preventDefault();
    $("#reservation-form").trigger("reset");
  };

  //---------send reservation form data to backend
  const handleSubmit = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    const newOrder = {
    foodName,
    quantity,
    firstName,
    lastName,
    email,
    phoneNumber,
    address,
    total: totalAmount(),
    };

    axios
      .post("http://localhost:8001/order", newOrder)
      .then(() => {
        alert("Order Completed Successfully");
      })
      .catch((err) => {
        if (err.response) alert("Response " + err.response.message);
        else if (err.request) alert("Request " + err.request.message);
        else if (err.message) alert("Other " + err.message);
        else alert(err);
      });
      

    // history.push("/pay", {data: data});
  };

  return (
    <div>
      <div class="row">
        <ScrollImage />
      </div>
      <div class="row">
        <div
          className="container-reservation"
          style={{
            backgroundImage: `url(${background})`,
            height: "auto",
            width: "1190px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginLeft: "7%",
            marginTop: "-5%",
            paddingBottom: "2%",
          }}
        >
          <form encType="multipart/form-data" id="reservation-form" style={{
            width: '80%',
          }}>
            <div className="mb-3">
              <label for="foodName" className="form-label">
                Food Name{" "}
              </label>

              <input
                type="text"
                className="form-control"
                id="foodName"
                name="foodName"
                value={foodName}
                // onChange={(e) => {
                //   setRoomName(e.target.value);
                // }}
                readOnly
              />
              <br />
              <br />
        
              <label for="quantity" className="form-label">
                Number of Item
              </label>
              <input
                type="text"
                className="form-control"
                id="quantity"
                name="quantity"
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <label for="firstName" className="form-label">
                First Name{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <label for="lastName" className="form-label">
                Last Name{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <label for="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <label for="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                required
              />
              <br />
              <br />


              <label for="address" className="form-label">
                Address
              </label>
              <textarea
                className="form-control"
                id="address"
                name="address"
                cols="50"
                rows="5"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              ></textarea>
              <br />
              <br />
              
              <label for="total" className="form-label">
                Total
              </label>
              <input
                type="text"
                className="form-control"
                id="total"
                name="total"
                value={totalAmount()}
                // onChange={(e) => {
                //   setTotal(e.target.value);
                // }}
                readOnly
              />
              <br />
              <br />
              <div id="reserve-button">
                <button
                  id="reserve-btn"
                  className="btn btn-outline-primary mr-1"
                  onClick={clearForm}
                >
                  Clear
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link
                  id="reserve-btn"
                  onClick={handleSubmit}
                  to={{
                    pathname: `/payfood/${email}`,
                  }}
                  className="btn btn-outline-primary"
                  type="submit"
                >
                  Submit
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
