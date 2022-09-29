import React from "react";
require('./css/style.css');

export default function Food() {
  return (
    <div>
        <h1>Manage Food</h1>
    <div class="card-group">
      
      <div class="card">
      <a href="insertfood">
        <img
          src={require("./images/foodAdd.jpg")}
          class="card-img-top"
          alt="insert"
        />
        </a>
        <div class="card-body">
          <h1 class="card-title">Add Food</h1>
        </div>
      </div>
     
      <div class="card">
      <a href="/viewfood">
        <img
          src={require("./images/foodUpdate.jpg")}
          class="card-img-top"
          alt="manage"
        />
        </a>
        <div class="card-body">
          <h1 class="card-title">Update / Delete Food</h1>
        </div>
      </div>
      </div>
    </div>
  );
}
