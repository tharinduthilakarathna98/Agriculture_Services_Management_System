import React, { Component } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class DisplayAd extends Component {

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
    <div style={{marginTop: '20px'}}>
      <div >
          <br/>
          <div class="d-grid gap-2 d-md-block" style={{marginLeft:"-240px"}}>
  <button class="btn btn-primary" type="button" style={{marginLeft:"22rem", marginBottom:"30px", width:"150px", height:"50px",backgroundColor:"#12af39", fontWeight:"700"}}>Back</button>
</div>
    <div class="text-center" style={{border:"2px solid black", marginRight:"110px",marginLeft:"110px"}}>
    
        <br/>
        
        <br/>
        
  <img  class="rounded" src={this.state.img} alt="..." style={{ width: "40rem" }} />

  <br/>
  <br/>
  <div className="btn-group" style={{ marginLeft: "30rem" }}>
  <button type="button" className="btn btn-success">
   Share
  </button>
</div>
<div className="btn-group" style={{ marginLeft: "2rem" }}>
  <button type="button" className="btn btn-warning">
   Print
  </button>
</div>
<br/>
  <hr></hr>
  <br/>
  <div style={{marginRight: "21rem", fontWeight:"700"}}>
  <blockquote class="blockquote" style={{float: "right"}}>
  <p className="mb-0" style={{marginRight:"-70px"}}>Town : <span className="bg-secondary p-1 px-4 rounded text-white">{this.state.town}</span></p>
</blockquote>
<blockquote class="blockquote">
  <p className="mb-0" style={{marginLeft:"125px"}}>Area of Land : <span className="bg-secondary p-1 px-4 rounded text-white">{this.state.sizeOfArea} Perches</span></p>
</blockquote>
<blockquote class="blockquote" style={{float: "right"}}>
  <p className="mb-0" style={{marginRight:"-70px"}}>AgentRef : <span className="bg-secondary p-1 px-4 rounded text-white">{this.state.AgentRef}</span></p>
</blockquote>
<blockquote class="blockquote">
  <p className="mb-0" style={{marginLeft:"230px"}}>Offered for : <span className="bg-secondary p-1 px-4 rounded text-white">{this.state.heading}</span></p>
</blockquote>
</div>
<br/>
<hr></hr>
<div style={{marginRight: "19rem"}}>
<h1 style={{marginRight: "1.5rem", fontWeight:"700"}}>Property Details</h1>
<br/>
<p style={{marginLeft:"125px", width:"70rem"}}>{this.state.description}</p>
<p></p>
</div>
<br/>
<div className="container p-3 my-3 bg-dark text-white">
  <h1 >Contact Advertiser ({this.state.contactName})</h1>
</div>
<div className='col-md-8 mt-4 mx-auto'>
<h5>Phone : <span className="bg-secondary p-1 px-4 rounded text-white">{this.state.phone}</span></h5>
<br/>
<h5 style={{marginLeft:"68px"}}>Email : <span className="bg-secondary p-1 px-4 rounded text-white">{this.state.email}</span></h5>

</div>
<br/>
<button onClick={() => window.location = `mailto:${this.state.email}`} className="btn btn-success" style={{marginBottom:"20px"}}>Contact Me</button>
  <br/>
</div>
<br/>
</div>
</div>
  )
}
}
export default withParams(DisplayAd);