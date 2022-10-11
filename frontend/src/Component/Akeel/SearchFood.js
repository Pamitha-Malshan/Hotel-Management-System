import React, { Component } from "react";
import axios from "axios";
import "./css/style.css";
import { Link } from "react-router-dom";
import searchBack from "./images/searchback.jpg";
import search from "./images/search.jpg";

export default class SearchFood extends Component {
  constructor(props) {
    super(props);

    this.onLinkClick = this.onLinkClick.bind(this);

    this.state = {
      foods: [],
      showMessage: false,
    };
  }

  componentDidMount() {
    this.retrieveFoods();
  }

  //-------------retrieve all the available foods
  retrieveFoods() {
    axios.get("http://localhost:8001/getfoods/available").then((res) => {
      if (res.data.success) {
        this.setState({
          foods: res.data.exisistingFoods,
        });
      }
    });
  }

  //-------------filter the data of search
  filterData(sfood, searchKey) {
    const result = sfood.filter((food) => food.foodName.includes(searchKey));
    this.setState({ foods: result });
  }

  //--------------function of handling search area
  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8001/getfoods").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.exisistingFoods, searchKey);
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
          <div
            className="input-group"
            style={{
              backgroundImage: `url(${searchBack})`,
              height: "500px",
              width: "110%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginTop: "20px",
              marginLeft: "-20%",
              paddingTop: "2%",
              // paddingBottom:'2%',
              // marginBottom:'2%'
            }}
          >
            <div
              className="form-outline"
              style={{
                paddingTop: "400px",
                width: "650px",

                marginLeft: "270px",
              }}
            >
              <input
                type="text"
                className="form-control"
                name="searchQuary"
                placeholder="   Enter Food Name"
                onChange={this.handleSearchArea}
              />
            </div>
          </div>
        </center>

        <br />
        <br />
        <div
          style={{
            backgroundImage: `url(${search})`,
            height: "auto",
            width: "110%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            marginTop: "-37px",
            marginLeft: "-15%",
            paddingTop: "2%",
            paddingBottom: "2%",
          }}
        >
          <div class="table-responsive">
            <center>
              <table>
                {this.state.foods.map((food, index) => (
                  <tbody
                    id="list-group"
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <tr>
                      {/* <td> */}

                      <h2>{food.foodName}</h2>
                      {/* </td> */}

                      <tr>
                        <td>
                          <img className="imageSearch"
                            src={
                              process.env.PUBLIC_URL +
                              `/uploads/food/${food.image}`
                            }
                            alt="food"
                          />
                        </td>
                        <td>
                          <Link
                            to={{
                              pathname: "/orderFood",
                              state: {
                                foodName: food.foodName,
                                Price: food.foodPrice,
                              }
                              
                              
                            }}
                           
                            className="btn btn-default"
                            id="book-button"
                            type="submit"
                          >
                            Order
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="/search" onClick={this.onLinkClick}>
                            Food Details
                          </a>
                        </td>
                        <td id="room-details">
                          {this.state.showMessage && (
                            <p id="p_wrap">
                              <p>
                                Food Recepie:
                                <br /> {food.foodRecepie}
                              </p>
                              <p>Food Price: {food.foodPrice}</p>
                              <p>Food Catogary: {food.foodCatogory}</p>
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
