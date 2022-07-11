import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import adformback2 from "./img/adformback2.jpg";
import swal from "sweetalert";

const AdvertiserForm = () => {
  const [listOfAds, setListOfAdvertisement] = useState([]);
  const [type, setType] = useState("Something else here");
  const [town, setTown] = useState("");
  const [AgentRef, setAgentRef] = useState("");
  const [heading, setheading] = useState("");
  const [description, setdescription] = useState("");
  const [sizeOfArea, setsizeOfArea] = useState("");
  const [priceRate, setpriceRate] = useState("");
  const [contactName, setcontactName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [img, setImg] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    setIsSubmit(true);
    sub();
  };

  const validate = () => {
    const errors = {};
    if (!type) {
      errors.type = "type is required!";
    }
    if (!town) {
      errors.town = "town is required!";
    }
    if (!AgentRef) {
      errors.AgentRef = "AgentRef is required!";
    }
    if (!heading) {
      errors.heading = "heading is required!";
    }

    if (!description) {
      errors.description = "description is required!";
    }
    if (!sizeOfArea) {
      errors.sizeOfArea = "sizeOfArea is required!";
    }
    if (!contactName) {
      errors.contactName = "contactName is required!";
    }
    if (!email) {
      errors.email = "email is required!";
    }
    if (phone.length !== 10) {
      errors.phone = "phone is required!";
    }
    if (!img) {
      errors.img = "Image is required!";
    }
    return errors;
  };

  const sub = () => {
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createAd();
    }
  };

  const createAd = () => {
    axios
      .post("http://localhost:8000/api/Ads/", {
        type,
        town,
        AgentRef,
        heading,
        description,
        sizeOfArea,
        priceRate,
        contactName,
        email,
        phone,
        img,
      })
      .then((response) => {
        setListOfAdvertisement([
          ...listOfAds,
          {
            type,
            town,
            AgentRef,
            heading,
            description,
            sizeOfArea,
            priceRate,
            contactName,
            email,
            phone,
            img,
          },
        ]);
      });
    swal({
      title: "Advertisment Added Successfuly!",
      icon: "success",
      confirmButtonText: "OK",
    }).then(function () {
      // Redirect the user
      window.location.href = "/Ads/AdminView";
    });
  };

  return (
    <div
      style={{
        backgroundImage: `url(${adformback2})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <br />
      <h1
        style={{
          fontFamily: "Georgia",
          fontSize: "100px",
          textAlign: "center",
          color: "white",
        }}
      >
        Advertiser Form
      </h1>
      <br />
      <div style={{ backgroundColor: "black" }}></div>
      <div
        className="col-md-8 mt-4 mx-auto"
        style={{
          fontWeight: "bold",
          fontFamily: "sans-serif",
          borderRadius: "30px",
          border: "3px solid green",
          margin: "2px",
        }}
      >
        <br />
        <form style={{ margin: "20px" }}>
          <br />
          <div className="row mb-3">
            <label class="col-sm-2 col-form-label" style={{ color: "#D3D3D3" }}>
              Type
            </label>
            <div className="col-sm-10">
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ backgroundColor: "#1bb004" }}
                >
                  {type}
                </a>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                    value="action"
                  >
                    Cinnamon
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Coconut
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Tea
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Rubber
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Waterfront
                  </li>
                  <li
                    onClick={(e) => {
                      setType(e.target.textContent);
                    }}
                  >
                    Something else here
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <label class="col-sm-2 col-form-label" style={{ color: "#D3D3D3" }}>
              Town
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setTown(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.town}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              AgentRef
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setAgentRef(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.AgentRef}</p>
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Heading
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setheading(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.heading}</p>
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Description
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.description}</p>
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Size of Area(Perches)
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setsizeOfArea(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.sizeOfArea}</p>
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Price Rate(Per Perch)
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setpriceRate(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.priceRate}</p>
            </div>
          </div>

          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Contact Name
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                className="form-control"
                required
                onChange={(e) => {
                  setcontactName(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.contactName}</p>
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="email"
                className="form-control"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.email}</p>
            </div>
          </div>
          <div className="row mb-3">
            <label
              for="inputEmail3"
              class="col-sm-2 col-form-label"
              style={{ color: "#D3D3D3" }}
            >
              Phone
            </label>
            <div className="col-sm-10">
              <input
                style={{ backgroundColor: "#D3D3D3" }}
                type="text"
                required
                className="form-control"
                onChange={(e) => {
                  setphone(e.target.value);
                }}
              />
              <p class="alert-txt">{formErrors.phone}</p>
            </div>
          </div>
          <br />
          <div className="form-group my-4">
            <label className="my-1" style={{ color: "#D3D3D3" }}>
              Image
            </label>
            <input
              style={{ backgroundColor: "#D3D3D3" }}
              type="text"
              className="form-control"
              placeholder="Image"
              value={img}
              required
              onChange={(e) => {
                setImg(e.target.value);
              }}
            />
            <p class="alert-txt">{formErrors.img}</p>
          </div>

          <div class="row justify-content-end" id="add-btn">
            <center>
              <Link to="/Ads/AdminView">
                {" "}
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="btn-block btn-primary"
                  style={{ backgroundColor: "#1bb004" }}
                >
                  Submit
                </button>
              </Link>{" "}
            </center>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdvertiserForm;
