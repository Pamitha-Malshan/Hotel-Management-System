import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import $ from 'jquery';
import 'jquery-validation';
import './css/style.css';


export default function AddFood() {
  const [foodName, setFoodName] = useState("");
  const [foodRecepie, setFoodRecepie] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodCatogory, setFoodCatogory] = useState("");
  const [image, setFile] = useState("");
  const [msg, setMsg] = useState("");

  let navigate = useHistory();


//Add Food
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    var form = document.getElementById("form");

    formData.append("foodName", foodName);
    formData.append("foodRecepie", foodRecepie);
    formData.append("foodPrice", foodPrice);
    formData.append("foodCatogory", foodCatogory);
    formData.append("file", image);

    axios.post("http://localhost:8001/food/save", formData)
    .then((response) => {
        setMsg(response.data.resMsg);
  
        setFoodName("");
        setFoodRecepie("");
        setFoodPrice("");
        setFoodCatogory("");
        setFile("");
        form.reset();
      })
      .catch((err) => {
        alert("Data not Saved" + err.message);
      });

      navigate.push('/food');
  };
//Reset form fields
  const clearForm = (e) => {
    e.preventDefault();
    $("#form").trigger("reset");
  }
  //validate form
  useEffect(() => {
    const createFoodForm = $('#form');

    createFoodForm.validate({
        rules: {
            foodName: {
                lettersonly: true,
                required: true
                
            },
            foodRecepie: {
                required: true
            },
            foodPrice: {
                number: true,
                minlength: 0,
                required: true
                
            },
            foodCatogory: {
                required: true
            },
            file: {
                extension: "jpg|jpeg|png",
                required: true
                
            }

        },
        messages: {
            foodName: {
                lettersonly: "Please enter letters only",
                required: 'Please Enter Food Name'
                
            },
            foodRecepie: {
                required: 'Please Enter Food Recepie'
            },
            foodPrice: {
                required: 'Please Enter Food Amount',
                number: 'Only Decimal Numbers allowed',
                minlength: 'Amount should be more than 0'
            },
            foodCatogory: {
                required: 'Please Enter Food Catogory'
            },
            file: {
                required: 'Please Upload Food Image',
                extension: ' Only jpg, jpeg, and png images allowed'
            }
        }
    })
  })

  return(
    <div>

        <div className="container-div">
        
        <p class="mb-3 mt-2" style={{color:"green",marginLeft:"57px"}}>
            <b>{msg}</b>
        </p>
        <form onSubmit={handleSubmit} encType="multipart/form-data" id="form">
            <div className="mb-3">
                <label for="foodName" className="form-label">Food Name <span id="star">*</span> </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="foodName" 
                    name="foodName"
                    onChange={(e) => {
                        setFoodName(e.target.value);
                    }}
                    required
                />
                <br/>
                <label for="foodRecepie" className="form-label">Food Recepie <span id="star">*</span> </label>
                <textarea 
                    class="form-control" 
                    id="foodRecepie" 
                    name="foodRecepie"
                    rows="10"
                    cols="50" 
                    onChange= {(e) => {
                        setFoodRecepie(e.target.value);
                    }} 
                    required
                >               
                </textarea>
                <br/>
                <label for="foodPrice" className="form-label">Food Price <span id="star">*</span> </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="foodPrice" 
                    name="foodPrice"
                    onChange={(e) => {
                        setFoodPrice(e.target.value);
                    }}
                    required
                />
                <br/>
                <label for="foodCatogory" className="form-label">Food Catogory <span id="star">*</span> </label>
                <select class="form-select" onChange={(e) => { setFoodCatogory(e.target.value);}} name="foodCatogory">
                    <option value="Fast Foods" selected>Fast Foods</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Indian Foods">Indian Foods</option>
                    <option value="Bakery">Bakery</option>
                </select>
                <br/>
                <label for="file" className="form-label">Upload Image <span id="star">*</span> </label>
                <div class="mb-3">
                    <input 
                        class="form-control" 
                        type="file" 
                        id="file" 
                        name="file"
                        accept="image/*"
                        onChange={(e) => {
                            setFile(e.target.files[0]);
                        }}
                        required
                    />
                </div>
            </div>
            <div>
                <button className="btn btn-outline-primary mr-1" onClick={clearForm}>Clear</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
    </div>
  )
}
