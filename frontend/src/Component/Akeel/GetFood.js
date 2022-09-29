import React, { Component } from "react";
import axios from "axios";

export default class ManageFoods extends Component {
    constructor(props){
        super(props);

        this.state = {
            foods: [],
        };
    }

    componentDidMount(){  
        this.retrieveFoods();
    }

    retrieveFoods(){
        axios.get("http://localhost:8001/getfoods").then((res) => {
            if(res.data.success) {
                this.setState({
                    foods: res.data.exisistingFoods,
                });
            }
        });
    }

    onDeleteFood = (id) => {
        axios.delete(`http://localhost:8001/deletefood/${id}`).then((res) => {
            alert("Food Deleted Successfully");
            this.retrieveFoods();
        });
    };

    render(){
        return(
            <div class="table-responsive">
                <center>
                    <h1>Manage Food Details</h1>
                <table className="table table-hover w-auto">
                    <thead>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Index</td>
                        <td>Food Name</td>
                        <td>Food Recepie</td>
                        <td>Food Price</td>
                        <td>Food Catogory</td>
                        <td>Image</td>
                        <td>Status</td>
                        <td>Update</td>
                        <td>Delete</td>
                    </thead>
                    <tbody>
                        {this.state.foods.map((food, index) => (
                           <tr key={index}>
                           
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{index + 1}</td>
                            <td>{food.foodName}</td>
                            <td>{food.foodRecepie}</td>
                            <td>{food.foodPrice}</td>
                            <td>{food.foodCatogory}</td>
                            <td>
                                <img 
                                src={process.env.PUBLIC_URL + `/uploads/food/${food.image}`} 
                                alt="Food"
                                style={{ width: "230px", height: "200px" }}
                                />
                            </td>
                            <td>{food.status}</td>
                            <td>
                                <a href={`/food/update/${food._id}`}>
                                    <button type="button" className="btn btn-warning"><i className="fas fa-edit"></i>Update</button>
                                </a>
                            </td>
                            <td><button type="button" className="btn btn-danger" onClick={() => this.onDeleteFood(food._id)}><i className="fas fa-trash-alt"></i>Delete</button></td>
                           </tr>
                        ))}
                    </tbody>
                </table>
                </center>
            </div>
        )
    } 
}