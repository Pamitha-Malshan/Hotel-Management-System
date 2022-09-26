import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import $ from "jquery";
import "jquery-validation";
import "./css/style.css";
import background from "./images/add2.jpg";

export default function AddRoom() {
  const [roomName, setRoomName] = useState("");
  const [roomFeatures, setRoomFeatures] = useState("");
  const [roomAmount, setRoomAmount] = useState("");
  const [roomType, setRoomType] = useState("Lake View Twin");
  const [image, setFile] = useState("");
  const [msg, setMsg] = useState("");

  let navigate = useHistory();

  //--------Insert room function
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    var form = document.getElementById("form");

    formData.append("roomName", roomName);
    formData.append("roomFeatures", roomFeatures);
    formData.append("roomAmount", roomAmount);
    formData.append("roomType", roomType);
    formData.append("file", image);

    axios
      .post("http://localhost:8001/room/save", formData)
      .then((response) => {
        setMsg(response.data.resMsg);

        setRoomName("");
        setRoomFeatures("");
        setRoomAmount("");
        setRoomType("");
        setFile("");
        form.reset();
      })
      .catch((err) => {
        alert("Data not Saved" + err.message);
      });

    navigate.push("/room");
  };

  //------clear the form fields
  const clearForm = (e) => {
    e.preventDefault();
    $("#form").trigger("reset");
  };

  useEffect(() => {
    //---------validate the form fields
    const createRoomForm = $("#form");

    createRoomForm.validate({
      rules: {
        roomName: {
          lettersonly: true,
          required: true,
        },
        roomFeatures: {
          required: true,
        },
        roomAmount: {
          number: true,
          minlength: 0,
          required: true,
        },
        roomType: {
          required: true,
        },
        file: {
          extension: "jpg|jpeg|png",
          required: true,
        },
      },
      messages: {
        roomName: {
          lettersonly: "Please enter letters only",
          required: "Please Enter Room Name",
        },
        roomFeatures: {
          required: "Please Enter Room Features",
        },
        roomAmount: {
          required: "Please Enter Room Amount",
          number: "Only Decimal Numbers allowed",
          minlength: "Amount should be more than 0",
        },
        roomType: {
          required: "Please Enter Room Type",
        },
        file: {
          required: "Please Upload Room Image",
          extension: " Only jpg, jpeg, and png images allowed",
        },
      },
    });
  });

  return (
    <div>
      <div
        className="container-div"
        style={{
          backgroundImage: `url(${background})`,
          height: "750px",
          width: "1025px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginLeft: "5%",
          paddingTop: "2%",
          paddingBottom: "2%",
          marginBottom: "2%",
        }}
      >
        <div id="addroom-form">
          <form onSubmit={handleSubmit} encType="multipart/form-data" id="form">
            <div className="mb-3">
              <label for="roomName" className="form-label">
                Room Name <span id="star">*</span>{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="roomName"
                name="roomName"
                onChange={(e) => {
                  setRoomName(e.target.value);
                }}
                required
              />
              <br />
              <label for="roomFeatures" className="form-label">
                Room Features <span id="star">*</span>{" "}
              </label>
              <textarea
                class="form-control"
                id="roomFeatures"
                name="roomFeatures"
                rows="10"
                cols="50"
                onChange={(e) => {
                  setRoomFeatures(e.target.value);
                }}
                required
              ></textarea>
              <br />
              <label for="roomAmount" className="form-label">
                Room Amount <span id="star">*</span>{" "}
              </label>
              <input
                type="text"
                className="form-control"
                id="roomAmount"
                name="roomAmount"
                onChange={(e) => {
                  setRoomAmount(e.target.value);
                }}
                required
              />
              <br />
              <label for="roomType" className="form-label">
                Room Type <span id="star">*</span>{" "}
              </label>
              <select
                class="form-select"
                value={roomType}
                onChange={(e) => {
                  setRoomType(e.target.value);
                }}
                name="roomType"
              >
                <option value="Lake View Twin">Lake View Twin</option>
                <option value="Standard Double City View">
                  Standard Double City View
                </option>
                <option value="Standard Double Room">
                  Standard Double Room
                </option>
                <option value="Standard Queen View">Standard Queen View</option>
              </select>
              <br />

              <br />
              <label for="file" className="form-label">
                Upload Image <span id="star">*</span>{" "}
              </label>
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
            <div id="addroom-button">
              <button
                className="btn btn-outline-primary mr-1 pay-btn"
                id="submit"
                onClick={clearForm}
              >
                Clear
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button
                type="submit"
                className="btn btn-primary pay-btn"
                id="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
