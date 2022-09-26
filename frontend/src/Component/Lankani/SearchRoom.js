import React, { Component } from "react";
import axios from "axios";
import "./css/style.css";
import { Link } from "react-router-dom";
import searchBack from './images/searchback.jpg';
import search from './images/search.jpg';

export default class SearchRoom extends Component {
  constructor(props) {
    super(props);

    this.onLinkClick = this.onLinkClick.bind(this);

    this.state = {
      rooms: [],
      showMessage: false,

    };
  }

  componentDidMount() {
    this.retrieveRooms();
  }

  retrieveRooms() {
    axios.get("http://localhost:8001/getrooms/available").then((res) => {
      if (res.data.success) {
        this.setState({
          rooms: res.data.exisistingRooms,
        });
      }
    });
  }

  filterData(sroom, searchKey) {
    const result = sroom.filter((room) => room.roomName.includes(searchKey));
    this.setState({ rooms: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/getrooms").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.exisistingRooms, searchKey);
      }
    });
  };

  onLinkClick = (e) => {
    e.preventDefault();
    this.setState({ showMessage: true });
  };

 
  render() {
    return (
      <div>
        <center>
          <div className="input-group" style={{
        backgroundImage: `url(${searchBack})`,
        height: "500px",
        width: "110%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "20px",
        marginLeft:'-20%',
        paddingTop:'2%',
        // paddingBottom:'2%',
        // marginBottom:'2%'
    }}>
            
            <div className="form-outline" style={{
              paddingTop:'400px',
              width:'650px',
              
              marginLeft:'270px'
            }}>
            
              <input
                type="text"
                className="form-control"
                name="searchQuary"
                placeholder="   Enter Room Name"
                onChange={this.handleSearchArea}
              />
            </div>
          </div>
        </center>

        <br />
        <br />
    <div style={{
        backgroundImage: `url(${search})`,
        height: "auto",
        width: "110%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "-37px",
        marginLeft:'-15%',
        paddingTop:'2%',
        paddingBottom:'2%',
        
    }}>
    <div class="table-responsive" >
        <center>
          <table>
            {this.state.rooms.map((room, index) => (
              <tbody id="list-group"  className="list-group-item d-flex justify-content-between align-items-center">
                <tr>
                  {/* <td> */}
                  
                    <h2>{room.roomName}</h2>
                  {/* </td> */}
                  

                  <tr>
                  <td>
                    <img 
                      src={process.env.PUBLIC_URL + `/uploads/rooms/${room.image}`}
                      alt="room"
                    />
                    </td>
                    <td>
                    <Link to={{
                      pathname: "/roomreservation", 
                      state: {
                        RoomName: room.roomName,
                        Amount: room.roomAmount,
                      }}}
                    
                    
                    className="btn btn-default"
                    id="book-button"
                    type="submit"
                    >
                    Book Now
                    </Link>
                  </td>
                  </tr>
                  <tr>
                    <td>
                    <a href="/search" onClick={this.onLinkClick}>
                      Room Details
                    </a>
                    </td>
                    <td id="room-details">
                    {this.state.showMessage && (
                      <p id="p_wrap">
                        <p>Room Features:<br /> {room.roomFeatures}</p>
                        <p>Room Amount: {room.roomAmount}</p>
                        <p>Room Type: {room.roomType}</p>
                      </p>
                    )}
                    </td>
                  </tr>
                  </tr>
                  <br />
                  <br />
                  <br />
              </tbody>
            ))}
          </table>
          
        </center>
        </div>
    </div>
      </div>

      


    );
  }
}
