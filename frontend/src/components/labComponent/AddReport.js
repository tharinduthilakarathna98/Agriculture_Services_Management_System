import React, { Component } from "react";
import axios from "axios";
import "./labStyles.css";
import Roll from "react-reveal/Roll";
import Bounce from "react-reveal/Bounce";
import Jump from "react-reveal/Jump";
import Swal from 'sweetalert2';
 

export default class AddReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cName: "",
      cEmail: "",
      about: "",
      labId: "",
      reportStatus: "",
      error: null,
      emailError: null,
      reportStatusError: null,
      aboutError: null,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    console.log(value);

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { cName, cEmail, about, labId, reportStatus } = this.state;

    if (
      cName.length <= 0 ||
      about.length <= 0 ||
      labId.length <= 0 ||
      reportStatus.length <= 0
    ) {
      this.setState({
        ...this.state,
        error: "All the fields are required",
      });
      return;
    }

    if (about.length >= 20) {
      this.setState({
        ...this.state,
        aboutError: "About should be at most 100 digits long",
      });

      return;
    }

    console.log(reportStatus.toLowerCase());

    console.log(this.state.reportStatus !== "fail");
 

    const emailModel = /\S+@\S+\.\S+/;

    if (!emailModel.test(cEmail)) {
      this.setState({
        ...this.state,
        emailError: "Please enter a valid email address",
      });
      return;
    }

    const data = {
      cName: cName,
      cEmail: cEmail,
      about: about,
      labId: labId,
      reportStatus: reportStatus,
    };

    console.log(data);

    axios.post("http://localhost:8000/api/lab/add", data).then((res) => {
      if (res.data.success) {
       // alert("Post Added Successfully");
        this.setState({
          cName: "",
          cEmail: "",
          about: "",
          labId: "",
          reportStatus: "",
        });
      }
    });
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Lab report added successfully'
      })
    // Swal.fire({
    //     title: "Lab report Added Successfuly!!",
    //     icon: "success",
    //     confirmButtonText: "OK",
    //       })
  };


  render() {
    return (
      <div className="animation-area">
        <div className="col-md-7 mt-1 mx-auto">
          <div className="anim-back">
            <br></br>
            <div className="Lab-div1">
              <Roll left>
                <h1
                  className="h2 mb-2 font-weight-normal"
                  style={{
                    color: "white",
                    borderTopRightRadius: "20px",
                    borderTopLeftRadius: "20px",
                    backgroundColor: "green",
                    textAlign: "center",
                    padding: "10px",
                    textDecorationLine: "underline",
                  }}
                >
                  Create New Lab report
                </h1>
              </Roll>

              <div>
                <ul class="box-area">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <form className="need-validation" nonValidate>
                <Bounce left>
                  <div
                    className="form-group"
                    style={{ marginBottom: "50px", marginTop: "50px" }}
                  >
                    <label
                      className="RepLeble"
                      style={{ marginBottom: "-10px" }}
                    >
                      Company Name
                    </label>
                    <input
                      marginTop="0px"
                      type="text"
                      for="floatingInput"
                      className="RepBox"
                      name="cName"
                      placeholder="Enter Company Name"
                      value={this.state.cName}
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                </Bounce>

                {this.state.emailError && this.state.emailError.length > 0 && (
                  <Jump>
                    <h3 style={{ color: "#e60000" }}>
                      {this.state.emailError}{" "}
                    </h3>
                  </Jump>
                )}

                <Bounce left>
                  <div className="form-group" style={{ marginBottom: "50px" }}>
                    <label
                      className="RepLeble"
                      style={{ marginBottom: "-10px" }}
                    >
                      Company Email
                    </label>
                    <input
                      type="email"
                      className="RepBox"
                      name="cEmail"
                      placeholder="Enter Company Email"
                      value={this.state.cEmail}
                      onChange={this.handleInputChange}
                    ></input>
                  </div>

                  <div className="form-group" style={{ marginBottom: "50px" }}>

                  {this.state.aboutError && this.state.aboutError.length > 0 && (
                  <Jump>
                    <h3 style={{ color: "#e60000" }}>
                      {this.state.aboutError}{" "}
                    </h3>
                  </Jump>
                )}

                    <label
                      className="RepLeble"
                      style={{ marginBottom: "-10px" }}
                    >
                      Lab Report About
                    </label>
                    <textarea
                      type="text"
                      className="RepBox"
                      name="about"
                      placeholder="About"
                      rows="4"
                      value={this.state.about}
                      onChange={this.handleInputChange}
                    ></textarea>
                  </div>

                  <div className="form-group" style={{ marginBottom: "50px" }}>
                    <label
                      className="RepLeble"
                      style={{ marginBottom: "-10px" }}
                    >
                      Lab ID
                    </label>
                    <input
                      type="text"
                      className="RepBox"
                      name="labId"
                      placeholder="Enter Lab Id"
                      value={this.state.labId}
                      onChange={this.handleInputChange}
                    ></input>
                  </div>

                  <div className="form-group" style={{ marginBottom: "50px" }}>
                    <p>
                      {" "}
                      {this.state.reportStatusError &&
                        this.state.reportStatusError}{" "}
                    </p>
                    <label
                      className="RepLeble"
                      style={{ marginBottom: "-10px" }}
                    >
                      Lab Report Status
                    </label>
                    <input
                      type="text"
                      className="RepBox"
                      name="reportStatus"
                      placeholder="Enter Report Status"
                      value={this.state.reportStatus}
                      onChange={this.handleInputChange}
                    ></input>
                  </div>
                </Bounce>

                {this.state.error && this.state.error.length > 0 && (
                  <Jump>
                    <h3 style={{ color: "#e60000" }}> {this.state.error} </h3>
                  </Jump>
                )}
                <button
                  className="btn btn-success"
                  type="Submit"
                  style={{ marginTop: "15px" }}
                  onClick={this.onSubmit}
                >
                  <i className="far fa-check-square"></i>
                  &nbsp;Save
                  <></>
                </button>
              </form>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}