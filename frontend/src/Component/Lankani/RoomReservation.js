import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import "jquery-validation";
import "./css/style.css";
import ScrollImage from "./scrollimage";
import background from "./images/back2.jpg";

export default function RoomReservation(props) {
  //--------get room name from props
  const RoomName = props.location.state.RoomName;
  //--------get room amount from props
  const Amount = props.location.state.Amount;

  const [roomName, setRoomName] = useState(RoomName);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [noOfRooms, setNoOfRooms] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  // const [total, setTotal] = useState("");

  useEffect(() => {
    //--------validate the room reservation form
    const reserveRoomForm = $("#reserve-form");

    reserveRoomForm.validate({
      rules: {
        checkIn: {
          required: true,
        },
        checkOut: {
          required: true,
        },
        noOfRooms: {
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
        country: {
          required: true,
          lettersonly: true,
        },
        address: {
          required: true,
        },
        city: {
          required: true,
          lettersonly: true,
        },
      },
      messages: {
        checkIn: {
          required: "Please provide check in date",
        },
        checkOut: {
          required: "Please provide check out date",
        },
        noOfRooms: {
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
        country: {
          required: "Please provide country",
          lettersonly: "Please enter only letters",
        },
        address: {
          required: "Please provide Address",
        },
        city: {
          required: "Please provide city",
          lettersonly: "Please enter only letters",
        },
      },
    });
  });

  //------------calculate the total amount
  const totalAmount = () => {
    return Amount * noOfRooms;
  };

  //-------function of clear the form field
  const clearForm = (e) => {
    e.preventDefault();
    $("#reserve-form").trigger("reset");
  };

  //---------send reservation form data to backend
  const handleSubmit = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    const newReservation = {
      roomName,
      checkIn,
      checkOut,
      noOfRooms,
      firstName,
      lastName,
      email,
      phoneNumber,
      country,
      address,
      city,
      total: totalAmount(),
    };

   

    axios
      .post("http://localhost:8001/booking", newReservation)
      .then(() => {
        alert("Reservation Completed Successfully");
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
          className="container-reserve"
          style={{
            backgroundImage: `url(${background})`,
            height: "auto",
            width: "1190px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginLeft: "-7%",
            marginTop: "-5%",
            paddingBottom: "2%",
          }}
        >
          <form encType="multipart/form-data" id="reserve-form" style={{
            width: '80%',
          }}>
            <div className="mb-3">
              <label for="roomName" className="form-label">
                Room Name{" "}
              </label>

              <input
                type="text"
                className="form-control"
                id="roomName"
                name="roomName"
                value={roomName}
                // onChange={(e) => {
                //   setRoomName(e.target.value);
                // }}
                readOnly
              />
              <br />
              <br />
              <label for="checkIn" className="form-label">
                Check-in Date{" "}
              </label>
              <input
                type="Date"
                className="form-control"
                id="checkIn"
                name="checkIn"
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <label for="checkOut" className="form-label">
                Check-out Date{" "}
              </label>
              <input
                type="Date"
                className="form-control"
                id="checkOut"
                name="checkOut"
                onChange={(e) => {
                  setCheckOut(e.target.value);
                }}
                required
              />
              <br />
              <br />
              <label for="noOfRooms" className="form-label">
                Number of Rooms
              </label>
              <input
                type="text"
                className="form-control"
                id="noOfRooms"
                name="noOfRooms"
                onChange={(e) => {
                  setNoOfRooms(e.target.value);
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

              <label for="country" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                onChange={(e) => {
                  setCountry(e.target.value);
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
              <label for="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                id="city"
                name="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                required
              />
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
                    pathname: `/payroom/${email}`,
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
