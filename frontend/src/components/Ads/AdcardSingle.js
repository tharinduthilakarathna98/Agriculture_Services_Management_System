import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";

const AdcardSingle = ({title, type, price, size, id}) => {
  const navigate = useNavigate();

  const deleteAd = async () => {
    const { status } = await axios.delete(
      `http://localhost:8000/api/Ads/${id}`
    );

    alert("Advertisment Deleted Successfully");
  };

  return (
     
    <div className="card" style={{ width: "18rem" }}>
    
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{type}</p>
      <p className="card-text">{price}</p>
      <p className="card-text">{size}</p>
    </div>
    <button
          onClick={() => {
            navigate(`/Ads/all/DisplayAd/${id}`);
          }}
          className="details-button btn btn-success"
        >
          Details
        </button>
        <button
          onClick={deleteAd}
          className="details-button-danger btn btn-success"
        >
          Delete
        </button>
    <div className="card-body">
      
    </div>
  </div>
  );
};

export default AdcardSingle;
