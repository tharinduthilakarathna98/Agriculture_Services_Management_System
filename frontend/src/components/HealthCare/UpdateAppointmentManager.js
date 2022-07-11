import React,{useEffect, useState} from "react";
import axios from "axios";
import UpdateApp from "../HealthCare/Img/gappointment.jpg";
import {useLocation} from "react-router-dom"
import swal from 'sweetalert'

export default function AddAppointments(){

    const {state} = useLocation();
    // const location = useLocation()
    // const state = location.state
const [CustomerName,setCustomerName] = useState("");
const [NIC,setNIC] = useState("");
const [AnimalType,setAnimalType] = useState("");
const [ContactNo,setContactNo] = useState("");
const [Address,setAddress] = useState("");
const [Date,setDate] = useState("");
const [Time,setTime] = useState("");

useEffect(()=>{
    setCustomerName(state.appoint.CustomerName)
    setNIC(state.appoint.NIC)
    setAnimalType(state.appoint.AnimalType)
    setContactNo(state.appoint.ContactNo)
    setAddress(state.appoint.Address)
    setDate(state.appoint.Date)
    setTime(state.appoint.Time)
},[])


function sendAppointment(e){
  e.preventDefault();
  swal({text:"Appointment Updated", icon:"success"});

  const newAppointment = {
    CustomerName,
    NIC,
    AnimalType,
    ContactNo,
    Address,
    Date,
    Time
  }
 
  /*url*/
  axios.put(`http://localhost:8000/api/app/update/${state.appoint._id}`,newAppointment).then(()=>{
    swal({text:"Appointment Updated", icon:"success"});

   
  }).catch((err)=>{
    alert(err)
    console.log(err);
  })
}


   
      return(
       
        <div style={{paddingTop:"30px", paddingLeft:"290px"}}>
       <div style={{marginLeft:"110px", boxShadow: "5px 10px #888888",paddingTop:"80px", paddingBottom:"30px",width:"600px", marginBottom:"30px", border:"1px solid black"}}>  

          
          
              
                
                  <form className="get-appointment" id="appointment-form"
                  onSubmit={sendAppointment}>
                    
                    <h2 style={{paddingLeft:"110px"}}>Update An Appointment</h2>

                    <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
                      <label htmlFor="name" class="col-sm-2 col-form-label" >Name</label>
                      <div class="col-sm-6">
                        <input type="text" name="name" id="name" autoComplete="off"
                          placeholder="Your Name" value={CustomerName}
                          disabled />
                      </div>
                    </div>
                    
                    <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
                      <label htmlFor="name" class="col-sm-2 col-form-label">NIC</label>
                      <div class="col-sm-6">
                        <input type="text" name="NIC" id="NIC" autoComplete="off"
                          placeholder="Your NIC" value={NIC}
                          disabled />                   
                      </div>
                    </div>
                  
                    <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
                      <label htmlFor="name" class="col-sm-2 col-form-label">Breed</label>
                      <div class="col-sm-6">
                        <input type="text" name="AnimalType" id="AnimalType" autoComplete="off"
                          placeholder="Breed" value={AnimalType}
                          disabled />                    
                      </div>
                    </div>
                    
                    <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
                      <label htmlFor="name" class="col-sm-2 col-form-label">Contact</label>
                      <div class="col-sm-6">
                        <input type="text" name="ContactNo" id="ContactNo" autoComplete="off"
                          placeholder="Your Mobile No" value={ContactNo}
                          disabled />
                      </div>
                    </div>

                    <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
                      <label htmlFor="name" class="col-sm-2 col-form-label">Address</label>
                      <div class="col-sm-6">
                        <input type="text" name="Address" id="Address" autoComplete="off"
                          placeholder="Your Address" value={Address}
                          disabled />
                      </div>
                    </div>
                                     
                    <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
                      <label htmlFor="name" class="col-sm-2 col-form-label">Date</label>
                      <div class="col-sm-6">
                        <input type="text" name="Date" id="Date" autoComplete="off"
                          placeholder="Date Required" value={Date} onChange={(e)=>{setDate(e.target.value);
                          }} />
                      </div>
                    </div>
 
                    <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
                      <label htmlFor="name" class="col-sm-2 col-form-label">Time</label>
                      <div class="col-sm-6">
                        <input type="text" name="Time" id="Time" autoComplete="off"
                          placeholder="Time Required" value={Time} onChange={(e)=>{setTime(e.target.value);
                          }} />           
                      </div>
                    </div>
                  
                    <div className="form-group form-button" style={{paddingLeft:"210px",paddingTop:"30px"}}>
                      <button type="submit" class="btn btn-primary">Update</button>
                    </div>

                  </form>
      
      </div>
      </div>            
                          
    )
}

