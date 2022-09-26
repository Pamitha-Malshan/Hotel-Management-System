import React, { Component } from "react";
import axios from "axios";

export default class ManageRooms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
    };
  }

  componentDidMount() {
    this.retrieveRooms();
  }

  //------------retrieve all the rooms
  retrieveRooms() {
    axios.get("http://localhost:8001/getrooms").then((res) => {
      if (res.data.success) {
        this.setState({
          rooms: res.data.exisistingRooms,
        });
      }
    });
  }

  //----------delete a room function
  onDeleteRoom = (id) => {
    axios.delete(`http://localhost:8001/deleteroom/${id}`).then((res) => {
      alert("Room Deleted Successfully");
      this.retrieveRooms();
    });
  };

  render() {
    return (
      <div class="table-responsive">
        <center>
          <h1>Manage Rooms Details</h1>
          <table className="table table-hover w-auto">
            <thead>
              <td></td>

              <td>Index</td>
              <td>Room Name</td>
              <td>Room Features</td>
              <td>Room Amount</td>
              <td>Room Type</td>
              <td>Image</td>
              <td>Status</td>
              <td>Update</td>
              <td>Delete</td>
            </thead>
            <tbody>
              {this.state.rooms.map((room, index) => (
                <tr key={index}>
                  <td></td>

                  <td>{index + 1}</td>
                  <td>{room.roomName}</td>
                  <td>{room.roomFeatures}</td>
                  <td>{room.roomAmount}</td>
                  <td>{room.roomType}</td>
                  <td>
                    <img
                      src={
                        process.env.PUBLIC_URL + `/uploads/rooms/${room.image}`
                      }
                      alt="Room"
                      style={{ width: "230px", height: "200px" }}
                    />
                  </td>
                  <td>{room.status}</td>
                  <td>
                    <a href={`/room/update/${room._id}`}>
                      <button
                        type="button"
                        className="btn btn-warning"
                        id="get-button"
                      >
                        <i className="fas fa-edit"></i>&nbsp; Update
                      </button>
                    </a>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      id="get-button"
                      onClick={() => this.onDeleteRoom(room._id)}
                    >
                      <i className="fas fa-trash-alt"></i>&nbsp; Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
    );
  }
}
