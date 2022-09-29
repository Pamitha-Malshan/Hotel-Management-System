import React, { Component } from "react";
import axios from "axios";
import "./css/style.css";
import $ from 'jquery';
import 'jquery-validation';

export default class UpdateFood extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gfoodName: "",
      gfoodRecepie: "",
      gfoodPrice: "",
      gfoodCatogory: "",
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
    formData.append("foodName", this.state.gfoodName);
    formData.append("foodRecepie", this.state.gfoodRecepie);
    formData.append("foodPrice", this.state.gfoodPrice);
    formData.append("foodCatogory", this.state.gfoodCatogory);
    formData.append("file", this.state.gimage[0]);
    formData.append("status", this.state.gstatus);


    axios
      .put(`http://localhost:8001/food/update/${id}`, formData)
      .then((res) => {
        if (res.data.success) {
          alert("Food Updated Successfully");
          this.setState({
            gfoodName: "",
            gfoodRecepie: "",
            gfoodPrice: "",
            gfoodCatogory: "",
            gimage: "",
            gstatus: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/viewfood");
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8001/food/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          gfoodName: res.data.food.foodName,
          gfoodRecepie: res.data.food.foodRecepie,
          gfoodPrice: res.data.food.foodPrice,
          gfoodCatogory: res.data.food.foodCatogory,
        //   gimage: res.data.food.image,
          gstatus: res.data.food.status,
        });
      }
    });


    const updateFoodForm = $('#update-form');

    updateFoodForm.validate({
        rules: {
          gfoodName: {
                lettersonly: true,
                required: true
                
            },
            gfoodRecepie: {
                required: true
            },
            gfoodPrice: {
                number: true,
                minlength: 0,
                required: true
                
            },
            gfoodCatogory: {
                required: true
            },
            file: {
                extension: "jpg|jpeg|png",
                
            }

        },
        messages: {
          gfoodName: {
                lettersonly: "Please enter letters only",
                required: 'Please Enter Food Name'
                
            },
            gfoodRecepie: {
                required: 'Please Enter Food Recpie'
            },
            gfoodPrice: {
                required: 'Please Enter Food Amount',
                number: 'Only Decimal Numbers allowed',
                minlength: 'Amount should be more than 0'
            },
            gfoodCatogory: {
                required: 'Please Enter Food Catogary'
            },
            file: {
                extension: ' Only jpg, jpeg, and png images allowed'
            }
        }
      })


  }

  render() {
    return (
      <div>
        <center>
          <h1>Update Food</h1>
          <div className="container-update mb-3">
            <form
              onSubmit={this.onSubmit}
              encType="multipart/form-data"
              id="update-form"
            >
              <div className="form-group mb-3">
                <label for="foodName" className="form-label">
                  Food Name <span id="star">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfoodName"
                  name="gfoodName"
                  value={this.state.gfoodName}
                  onChange={this.handleInputChange}
                />
                <br />
                <label for="foodRecepie" className="form-label">
                Food Recepie <span id="star">*</span>
                </label>
                <textarea
                  class="form-control"
                  id="gfoodRecepie"
                  name="gfoodRecepie"
                  rows="10"
                  cols="50"
                  value={this.state.gfoodRecepie}
                  onChange={this.handleInputChange}
                ></textarea>
                <br />
                <label for="foodPrice" className="form-label">
                  Food Price <span id="star">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gfoodPrice"
                  name="gfoodPrice"
                  value={this.state.gfoodPrice}
                  onChange={this.handleInputChange}
                />
                <br />
                <label for="gfoodCatogory" className="form-label">
                Food Catogory <span id="star">*</span>
                </label>
                <select
                  class="form-select"
                  id="gfoodCatogory"
                  name="gfoodCatogory"
                  onChange={this.handleInputChange}
                  value={this.state.gfoodCatogory}
                >
                  
                  <option selected>Fast Foods</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Indian Foods">Indian Foods</option>
                    <option value="Bakery">Bakery</option>
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

              <button type="submit" className="btn btn-warning"><i className="fas fa-edit"></i>
                Update
              </button>
            </form>
          </div>
        </center>
      </div>
    );
  }
}
