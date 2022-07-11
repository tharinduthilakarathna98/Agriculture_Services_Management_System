import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import React,{useState} from "react";
import './addevents.css';
import axios from "axios";


function UpdateEvent(){
    const {id} = useParams();



const [Event_Id,setEvent_Id] = useState("");
const [Event_Name,setEvent_Name] = useState("");
const [Category,setCategory] = useState("");
const [Start_Date,setStart_Date] = useState("");
const [Start_Time,setStart_Time] = useState("");
const [Venue,setVenue] = useState("");
const [Description,setDescription] = useState("");
const [Image,setImage] = useState("");



function sendEventData(e){
  e.preventDefault();
  alert("would you like to update");


  const newEvent={

    Event_Id,
    Event_Name,
    Category,
    Start_Date,
    Start_Time,
    Venue,
    Description,
    Image

  }
  
  axios.put(`http://localhost:8000/api/Addevent/${id}`,newEvent).then(()=>{
     alert("Event Updated");

   }).catch((err)=>{
     alert(err)
     console.log(err);
   })
   window.location.href = "/events/admin";
}
useEffect(() => {
  axios.get(`http://localhost:8000/api/Addevent/${id}`).then(res => {
       setEvent_Id(res.data.Event_Id);
       setEvent_Name(res.data.Event_Name);
       setCategory(res.data.Category);
       setStart_Date(res.data.Start_Date);
       setStart_Time(res.data.Start_Time);
       setVenue(res.data.Venue);
       setImage(res.data.Image);
       console.log(res.data);
      })		
    }, [])

  return (
   
<div class="registrationbackimage">
<div class="container">
<div class="registrationforevent"><h2>Update Event</h2></div>
<form onSubmit={sendEventData} class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Event_Id</label>
    <input value={Event_Id} type="text" class="form-control" id="inputEmail4"onChange={(e)=>{ setEvent_Id(e.target.value);}}/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Event_Name</label>
    <input value={Event_Name} type="text" class="form-control" id="inputPassword4"onChange={(e)=>{ setEvent_Name(e.target.value);}}/>
  </div>

  <div class="col-md-6">
    <label for="inputState" class="form-label">Category</label>
    <select value={Category} id="inputState" class="form-select"onChange={(e)=>{ setCategory(e.target.value);}}>
      <option selected>Choose...</option>
      <option>Agricultural</option>
      <option>Animal</option>
      <option>Other</option>
    </select>
  </div>


  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Start Date</label>
    <input value={Start_Date} type="text" class="form-control" id="inputAddress" placeholder="07/2/2022"onChange={(e)=>{ setStart_Date(e.target.value);}}/>
  </div>
  <div class="col-md-6">
    <label for="inputAddress2" class="form-label">Start Time</label>
    <input value={Start_Time} type="text" class="form-control" id="inputAddress2" placeholder="8:00 a.m"onChange={(e)=>{ setStart_Time(e.target.value);}}/>
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
    <input value={Venue} type="text" class="form-control" id="inputAddress" placeholder=""onChange={(e)=>{ setVenue(e.target.value);}}/>
  </div>
  
  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Description</label>
    <input value={Description} type="text" class="form-control" id="inputAddress" placeholder=""onChange={(e)=>{ setDescription(e.target.value);}}/>
  </div>
  
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Virtual event
      </label>
    </div>
  </div>
  
</form>
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendEventData}>Update</button>
</div>
</div>
	
  
    
  );
}

export default UpdateEvent