import React, { Component } from "react";
import axios from "axios";
import "./css/style.css";
import $ from 'jquery';
import 'jquery-validation';
import background from './images/add2.jpg';

export default class UpdateRoom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groomName: "",
      groomFeatures: "",
      groomAmount: "",
      groomType: "",
      gimage: "",
      gstatus: "",
    };
  }

  handleInputChange = (e) => {

    if(e.target.name === 'image'){
        this.setState({
            gimage: e.target.files,
        });
    }

    const { name, value } = e.target;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.match.params.id;
 
    let formData = new FormData();
    formData.append("roomName", this.state.groomName);
    formData.append("roomFeatures", this.state.groomFeatures);
    formData.append("roomAmount", this.state.groomAmount);
    formData.append("roomType", this.state.groomType);
    formData.append("file", this.state.gimage[0]);
    formData.append("status", this.state.gstatus);


    axios
      .put(`http://localhost:8001/room/update/${id}`, formData)
      .then((res) => {
        if (res.data.success) {
          alert("Room Updated Successfully");
          this.setState({
            groomName: "",
            groomFeatures: "",
            groomAmount: "",
            groomType: "",
            gimage: "",
            gstatus: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/viewroom");
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8001/room/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          groomName: res.data.room.roomName,
          groomFeatures: res.data.room.roomFeatures,
          groomAmount: res.data.room.roomAmount,
          groomType: res.data.room.roomType,
        //   gimage: res.data.room.image,
          gstatus: res.data.room.status,
        });
      }
    });


    const updateRoomForm = $('#update-form');

    updateRoomForm.validate({
        rules: {
            groomName: {
                lettersonly: true,
                required: true
                
            },
            groomFeatures: {
                required: true
            },
            groomAmount: {
                number: true,
                minlength: 0,
                required: true
                
            },
            groomType: {
                required: true
            },
            file: {
                extension: "jpg|jpeg|png",
                
            }

        },
        messages: {
            groomName: {
                lettersonly: "Please enter letters only",
                required: 'Please Enter Room Name'
                
            },
            groomFeatures: {
                required: 'Please Enter Room Features'
            },
            groomAmount: {
                required: 'Please Enter Room Amount',
                number: 'Only Decimal Numbers allowed',
                minlength: 'Amount should be more than 0'
            },
            groomType: {
                required: 'Please Enter Room Type'
            },
            file: {
                extension: ' Only jpg, jpeg, and png images allowed'
            }
        }
      })


  }

  render() {
    return (
      <div 
      style={{
        backgroundImage: `url(${background})`,
        height: "830px",
        width: "1025px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        marginTop: "20px",
        marginLeft:'5%',
            paddingTop:'2%',
            paddingBottom:'2%',
            marginBottom:'2%'
    }}>
    
        <center>
          <h1>Update Room</h1>
          <div className="container-update mb-3" >
            <form
              onSubmit={this.onSubmit}
              encType="multipart/form-data"
              id="update-form"
            >
              <div className="form-group mb-3">
                <label for="roomName" className="form-label">
                  Room Name <span id="star">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="groomName"
                  name="groomName"
                  value={this.state.groomName}
                  onChange={this.handleInputChange}
                />
                <br />
                <label for="roomFeatures" className="form-label">
                  Room Features <span id="star">*</span>
                </label>
                <textarea
                  class="form-control"
                  id="groomFeatures"
                  name="groomFeatures"
                  rows="10"
                  cols="50"
                  value={this.state.groomFeatures}
                  onChange={this.handleInputChange}
                ></textarea>
                <br />
                <label for="roomAmount" className="form-label">
                  Room Amount <span id="star">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="groomAmount"
                  name="groomAmount"
                  value={this.state.groomAmount}
                  onChange={this.handleInputChange}
                />
                <br />
                <label for="roomType" className="form-label">
                  Room Type <span id="star">*</span>
                </label>
                <select
                  class="form-select"
                  id="groomType"
                  name="groomType"
                  onChange={this.handleInputChange}
                  value={this.state.groomType}
                >
                  <option selected>Lake View Twin</option>
                  <option value="Standard Double City View">
                    Standard Double City View
                  </option>
                  <option value="Standard Double Room">
                    Standard Double Room
                  </option>
                  <option value="Standard Queen View">
                    Standard Queen View
                  </option>
                </select>
                <br />
                <label for="file" className="form-label">
                  Upload Image <span id="star">*</span>
                </label>
                <div class="mb-3">
                  <input
                    accept="image/*"
                    class="form-control"
                    type="file"
                    id="file"
                    name="file"
                    onChange={this.handleInputChange}
                  />
                </div>
                <label for="status" className="form-label">
                  Status <span id="star">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gstatus"
                  name="gstatus"
                  value={this.state.gstatus}
                  onChange={this.handleInputChange}
                />
              </div>

              <button type="submit" className="btn btn-warning pay-btn" id="update-button"><i className="fas fa-edit"></i>
                Update
              </button>
            </form>
          </div>
        </center>
      </div>
    );
  }
}
