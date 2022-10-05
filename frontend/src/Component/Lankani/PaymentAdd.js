import { useEffect, useState } from "react";
import axios from "axios";
import payBackground from "./images/payback.jpg";
// import './validator/PaymentValidate';
import $ from "jquery";
import "jquery-validation";

export default function Payment(props) {
  const semail = props.match.params.email;

  const [bookedrooms, setBookedRooms] = useState([]);
  const [email, setEmail] = useState(semail);
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardTYpe] = useState("credit");
  const [cardExpireDate, setExpire] = useState("");
  const [cvv, setCVV] = useState("");
  const [msg, setMsg] = useState("");
  const [payemail, setPaymentEmail] = useState({
    to: email,
    subject: "Green Hotel Finance",
    description: "Thank you for Booking Room with Green Hotel",
  });

  useEffect(() => {
    //---------call the get booked rooms function
    getBookedRooms(email);

    //-------------validate the payment form
    const createRoomForm = $("#pay-form");

    createRoomForm.validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        bookingId: {
          required: true,
        },
        fname: {
          required: true,
          lettersonly: true,
        },
        lname: {
          required: true,
          lettersonly: true,
        },
        cardNumber: {
          required: true,
          minlength: 16,
          maxlength: 16,
          number: true,
        },
        cardType: {
          required: true,
        },
        expire: {
          required: true,
        },
        cvv: {
          required: true,
          minlength: 3,
          maxlength: 3,
          number: true,
        },
        total: {
          required: true,
        },
      },
      message: {
        email: {
          required: "Please provide email",
          email: "Please enter valid email",
        },
        fname: {
          required: "Please Provide First Name",
          lettersonly: "First Name should only contain letters",
        },
        lname: {
          required: "Please Provide Last Name",
          lettersonly: "Last Name should only contain letters",
        },
        cardNumber: {
          required: "Please Provide Card Number",
          minlength: "Card Number shouldn't be less than 16 numbers",
          maxlength: "Card Number shouldn't be greater than 16 numbers",
          number: "Card Number should only contain numbers",
        },
        cardType: {
          required: "Please Provide Card Type",
        },
        expire: {
          required: "Please Provide Expire Date. eg:- January 2023",
        },
        cvv: {
          required: "Please Provide CVV",
          minlength: "CVV shouldn't be less than 3 numbers",
          maxlength: "CVV shouldn't be greater than 3 numbers",
          number: "CVV should only contain numbers",
        },
        total: {
          required: "Total amount is required",
        },
      },
    });
  }, []);

  //---------get booked rooms according to the email
  function getBookedRooms(email) {
    console.log(email);
    axios
      .get(`http://localhost:8001/bookedroom/${email}`)
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.existingRooms);
          setBookedRooms(res.data.existingRooms);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  //-----------funtion of send the payment data to backend
  const buyNow = async (e) => {
    e.preventDefault();

    const newPayment = {
      email,
      bookingId: bookedrooms._id,
      firstName,
      lastName,
      cardNumber,
      cardType,
      cardExpireDate,
      cvv,
      total: bookedrooms.total,
    };

    await axios
      .post("http://localhost:8001/payment", newPayment)
      .then(() => {
        console.log(newPayment);
        alert("Payment Completed Successfully");

        //-------------send email of success payment
        axios
          .post("http://localhost:8001/email", payemail)
          .then((response) => setMsg(response.data.respMesg));
      })
      .catch((err) => {
        if (err.response) alert("Response " + err.response.message);
        else if (err.request) alert("Request " + err.request.message);
        else if (err.message) alert("Other " + err.message);
        else alert(err);
      });
  };

  return (
    <div>
      <div
        className="container-payment"
        style={{
          backgroundImage: `url(${payBackground})`,
          height: "800px",
          width: "95%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div id="pay-form-container">
          <h1 style={{color: 'white'}}>Payment</h1>
          <form id="pay-form" onSubmit={buyNow}>
            <div>
              <p
                class="mb-3 mt-2"
                style={{ color: "green", marginLeft: "57px" }}
              >
                <b>{msg}</b>
              </p>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email{" "}
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={email}
                  name="email"
                  // onChange={(e) => {
                  //   setEmail(e.target.value);
                  // }}
                  readOnly
                />
              </div>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="bookingId"
                  name="bookingId"
                  value={bookedrooms._id}
                  // onChange={(e) => {
                  //   setBookingId(e.target.value);
                  // }}
                  hidden
                />
              </div>
              <div class="mb-3">
                <label for="fname" class="form-label">
                  First Name on Card <span id="star">*</span>{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="fname"
                  name="fname"
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                  required
                />
              </div>

              <div class="mb-3">
                <label for="lname" class="form-label">
                  Last Name on Card <span id="star">*</span>{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="lname"
                  name="lname"
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="cardNumber" class="form-label">
                  Card Number <span id="star">*</span>{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="cardNumber"
                  name="cardNumber"
                  onChange={(e) => {
                    setCardNumber(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="cardType" class="form-label">
                  Card Type <span id="star">*</span>{" "}
                </label>
                <select
                  class="form-select"
                  name="cardType"
                  value={cardType}
                  onChange={(e) => {
                    setCardTYpe(e.target.value);
                  }}
                >
                  <option value="Credit">Credit</option>
                  <option value="Debit">Debit</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="expire" class="form-label">
                  Card Expiration Date <span id="star">*</span>{" "}
                </label>
                <input
                  type="month"
                  class="form-control"
                  pattern="[0-9]{4}-[0-9]{2}"
                  id="expire"
                  name="expire"
                  onChange={(e) => {
                    setExpire(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="cvv" class="form-label">
                  CVV <span id="star">*</span>{" "}
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="cvv"
                  name="cvv"
                  onChange={(e) => {
                    setCVV(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="total" class="form-label">
                  Total <span id="star">*</span>{" "}
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="total"
                  value={bookedrooms.total}
                  name="total"
                  // onChange={(e) => {
                  //   setTotal(e.target.value);
                  // }}
                  readOnly
                />
              </div>
              <button type="submit" class="btn btn-primary pay-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
