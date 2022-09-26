import React from "react";
require("./css/style.css");

export default function Room() {
  return (
    <div>
      <h1>Manage Room</h1>
      <div class="card-group">
        <div class="card">
          <a href="insertroom">
            <img
              src={require("./images/room1.jpg")}
              class="card-img-top"
              alt="insert"
            />
          </a>

          <div class="card-body">
            <h1 class="card-title">Insert Room</h1>
          </div>
        </div>

        <div class="card">
          <a href="/viewroom">
            <img
              src={require("./images/room2.jpg")}
              class="card-img-top"
              alt="manage"
            />
          </a>
          <div class="card-body">
            <h1 class="card-title">Update / Delete Room</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
