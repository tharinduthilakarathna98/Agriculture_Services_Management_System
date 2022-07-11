import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Ads.css";
import { Link } from "react-router-dom";

const PropertyCatalog = () => {
  
  const [ads, setAds] = useState(undefined);
  const [AdSearch , setadSearch] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/Ads/all`)
      .then((res) => {
        setAds(res.data);
      });

    console.log(ads);
  }, []);
  
  


  return (
<div style={{backgroundColor: "#76ad3b"}}>
<br/>

<div className="upper-images" style={{border:"2px solid #e2ebd8"}}>
        <img
          className="ecommerce-slide"
          src="https://th.bing.com/th/id/R.414f0016399d8a7af8ceb1030ee66281?rik=Gcv2%2f7iMfLKn8g&pid=ImgRaw&r=0"
          alt=""
        />
        <div class="middle">
    <div class="text"><p style={{color:"#555"}}>Lands To Buy..</p></div>
   <p className="para">Search our selection of land plots for sale in Sri Lanka. 
     Our fast-growing portfolio of properties brings you closer to your ideal home. 
     Every project is monitored and handled by detail-oriented team members 
     committed to serving our customers with the highest possible service to guarantee you find your dream farm.</p>
     <button class="buttonserv"><span>Discover</span></button> 
  </div>
      </div>

<div className='col-md-8 mt-4 mx-auto' style={{marginBottom:"40px",backgroundColor: "#76ad3b"}}>
  

<br/>
<div className="input-group" style={{ width: "18rem", border:"1px solid #e2ebd8" }}>
  <input type="search" onChange ={(e)=>{setadSearch(e.target.value); }} className="form-control rounded" placeholder="Type" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary" style={{color:"black"}}>search</button>
</div>
<br/>
<br/>
<hr></hr>
<br/>

<div className="products-list row p-5" style={{backgroundColor:"#D3D3D3"}}>
{ads && ads.filter(value=>{
            if(AdSearch ===""){
                return value;
            }else if(
                value.type.toLowerCase().includes(AdSearch.toLowerCase())
            ){
                return value
            }
        }).map((ad) => (
    <div className="card" style={{ width: "15rem", margin: "1rem", height:"20rem" }}>
    <div className="card-bodies">
    <div className="product-image" style={{height:"10rem", marginTop:"10px"}}>
        <img src={ad.img} alt="product"/>
      </div>
      <p className="card-text">Rs. {ad.priceRate} </p><p className="card-left"> Per Perch </p><br/>
      <p className="card-title">{ad.title}</p>
      <p className="card-type">{ad.type}</p>
      <p className="card-area">{ad.sizeOfArea} Perches</p>
      <Link className="card-link"to={`/Ads/Ad/${ad._id}/${ad.town}/${ad.AgentRef}/${ad.heading}/${ad.description}/${ad.sizeOfArea}/${ad.priceRate}/${ad.contactName}/${ad.email}/${ad.phone}/${encodeURIComponent(ad.img)}`}
      style={{ textDecoration: "none" }}>more..</Link>
    </div>
    <div className="card-body">
    </div>
  </div>
          ))}
      </div>
  </div>
  </div>
  );
}
export default PropertyCatalog;
