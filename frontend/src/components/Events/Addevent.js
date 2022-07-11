import React, { useState } from 'react'
import './addevents.css';
import axios from "axios";
import {Link} from 'react-router-dom';
const Addevent = () => {

const [Event_Id,setEvent_Id] = useState("");
const [Event_Name,setEvent_Name] = useState("");
const [Category,setCategory] = useState("");
const [Start_Date,setStart_Date] = useState("");
const [Start_Time,setStart_Time] = useState("");
const [Venue,setVenue] = useState("");
const [Description,setDescription] = useState("");
const [Image,setImage] = useState("");
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);


const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate());
  sub();
  setIsSubmit(true);
  
};

const validate=()=>{
  const errors = {};
  if(!Event_Name){
      errors.Event_Name = "Event name is required!";
     
  }
  if(!Event_Id){
    errors.Event_Id = "Event Id is required!";
   
}

  return errors;
}
const sub =() => {
 
  if (Object.keys(formErrors).length == 0 && isSubmit) {
    Addevent();
   
  }
}


function sendData(e){
  e.preventDefault();
  alert("Add");


  const newEvent={

    Event_Id,
    Event_Name,
    Category,
    Start_Date,
    Start_Time,
    Venue,
    Description,
    Image,


  }
 axios.post("http://localhost:8000/api/Addevent", newEvent).then(()=>{
   alert("Event Added")
   window.location.href = "/events/home";

 }).catch((err)=>{
   alert(err)
 })

 
}

  return (
<div class="registrationbackimages">
<div class="container">
<div class="registrationforevent"><h1>Add Event</h1></div>
<form onSubmit={sendData} class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Event Id</label>
    <input type="text" class="form-control" id="inputEmail4"onChange={(e)=>{ setEvent_Id(e.target.value);}}/>
    <p class="alert-txt">{formErrors.Event_Id}</p>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Event Name</label>
    <input type="text" class="form-control" id="inputPassword4"onChange={(e)=>{ setEvent_Name(e.target.value);}}/>
    <p class="alert-txt">{formErrors.Event_Name}</p>
  </div>

  <div class="col-md-6">
    <label for="inputState" class="form-label">Category</label>
    <select id="inputState" class="form-select"onChange={(e)=>{ setCategory(e.target.value);}}>
      <option selected>Choose...</option>
      <option>Agricultural</option>
      <option>Animal</option>
      <option>Other</option>
    </select>
  </div>



  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Start Date</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="07/2/2022"onChange={(e)=>{ setStart_Date(e.target.value);}}/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress2" class="form-label">Start Time</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="8:00 a.m"onChange={(e)=>{ setStart_Time(e.target.value);}}/>
  </div>
  
  <div class="col-md-6">
    <label for="inputState" class="form-label">All Day Event</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Yes</option>
      <option>No</option>
    
    </select>
  </div>

  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Venue</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""onChange={(e)=>{ setVenue(e.target.value);}}/>
  </div>
  
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Description</label>
    <textarea class="form-control" id="inputAddress" placeholder=""onChange={(e)=>{ setDescription(e.target.value);}}></textarea>
  </div>

  <div class="col-md-6">
    <label for="inputAddress2" class="form-label">Image</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder=""onChange={(e)=>{ setImage(e.target.value);}}/>
  </div>
  
  
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Virtual event
      </label>
    </div>
  </div>
  


  <div class="col-12">
   
    <button type="submit" class="btn-block btn-primary"> Add Event</button>
  </div>
</form>

</div>
</div>

  );
}

export default Addevent