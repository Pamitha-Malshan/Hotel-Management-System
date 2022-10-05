import React from "react";
require("./css/style.css");

export default function Report() {
  return (
    <div>
      <h1>Reports</h1>
      <div class="card-group">
        <div class="card" style={{
            width:"5%"
        }}>
          <a href="/paymentincome">
            <img
              src={require("./images/room1.jpg")}
              class="card-img-top"
              alt="incomeofroom"
              style={{width:'90%', marginLeft:'5%'}}
            />
          </a>

          <div class="card-body">
            <h1 class="card-title">Income of Room Reservation</h1>
          </div>
        </div>

        <div class="card">
          <a href="#">
            <img
              src={require("./images/food.jpg")}
              class="card-img-top"
              alt="incomeoffood"
              style={{width:'90%', marginLeft:'5%'}}
            />
          </a>
          <div class="card-body">
            <h1 class="card-title">Income of Food</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
