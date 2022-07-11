import React, { Component } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class AdminUpdateAds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      town: "",
      AgentRef: "",
      heading: "",
      description: "",
      sizeOfArea: "",
      priceRate: "",
      contactName: "",
      email: "",
      phone: "",
      img: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const id = this.props.params.id;

    const {
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
    } = this.state;

    const data = {
      town: town,
      AgentRef: AgentRef,
      heading: heading,
      description: description,
      sizeOfArea: sizeOfArea,
      priceRate: priceRate,
      contactName: contactName,
      email: email,
      phone: phone,
      img: img,
    };
    console.log(data);

    axios.put(`http://localhost:8000/api/Ads/${id}`, data).then((res) => {
      alert("Ad updated successfully!");
      window.location.href = "/Ads/AdminView";
    });
  };

  componentDidMount() {
    const {
      town,
      agentRef,
      heading,
      description,
      sizeofArea,
      priceRate,
      contactName,
      email,
      phone,
      image,
    } = this.props.params;

    this.setState({
      town: town,
      AgentRef: agentRef,
      heading: heading,
      description: description,
      sizeOfArea: sizeofArea,
      priceRate: priceRate,
      contactName: contactName,
      email: email,
      phone: phone,
      img: image,
    });
  }

  render() {
    return (
      <div className="col-md-8 mt-4 mx-auto" style={{marginBottom:"40px",marginTop:"200px", border:"2px solid black"}}>
        
        
        
        <form className="needs-validation" style={{marginLeft:"30px", marginRight:"30px",marginTop:"30px"}}>
        <h1
          style={{
            color: "#111",
            fontFamily: "Helavetica Neue",
            fontSize: "60px",
            fontWeight: "bold",
            letterSpacing: "-1px",
            marginBottom:"50px",
            lineHeight: "1",
            textAlign: "center",
          }}
        >
          <span className="p-1 px-4 rounded text-white" style={{backgroundColor:"#76ad3b"}}>
          Edit Advertisment
          </span>
        </h1>
          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Town</span>
            <input
              type="text"
              className="form-control"
              name="town"
              placeholder="town"
              value={this.state.town}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">AgentRef</span>
            <input
              type="text"
              className="form-control"
              name="AgentRef"
              placeholder="AgentRef"
              value={this.state.AgentRef}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Heading</span>
            <input
              type="text"
              className="form-control"
              name="heading"
              placeholder="heading"
              value={this.state.heading}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Description</span>
            <input
            style={{height:"100px"}}
              type="text"
              className="form-control"
              name="description"
              placeholder="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Size of Area</span>
            <input
              type="text"
              className="form-control"
              name="sizeOfArea"
              placeholder="sizeOfArea"
              value={this.state.sizeOfArea}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Price Rate</span>
            <input
              type="text"
              className="form-control"
              name="priceRate"
              placeholder="priceRate"
              value={this.state.priceRate}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Contact Name</span>
            <input
              type="text"
              className="form-control"
              name="contactName"
              placeholder="contactName"
              value={this.state.contactName}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Email</span>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Phone</span>
            <input
              type="text"
              className="form-control"
              name="phone"
              placeholder="phone"
              value={this.state.phone}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="form-group" style={{ marginBottom: "15px" }}>
          <span class="bg-secondary p-1 px-4 rounded text-white">Image</span>
            <input
              type="text"
              className="form-control"
              name="img"
              placeholder="img"
              value={this.state.img}
              onChange={this.handleInputChange}
            />
          </div>
          <center>
          <button
            className="btn btn-warning"
            type="submit"
            style={{ marginTop: "15px",marginBottom:"30px" }}
            onClick={this.onSubmit}
          >
            <i className="far fa-check-square"></i>
            &nbsp; Update
          </button>
          </center>
        </form>
      </div>
    );
  }
}

export default withParams(AdminUpdateAds);
