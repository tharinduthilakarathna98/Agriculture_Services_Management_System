import React, { useState } from 'react'
import axios from "axios";
import './Registerevent.css';

const RegisterEvent = () => {

const [Full_Name,setFull_Name] = useState("");
const [Address,setAddress] = useState("");
const [Email,setEmail] = useState("");
const [Phone_Number,setPhone_Number] = useState("");
const [No_Guests,setNo_Guests] = useState("");
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);
const [emailError, setEmailError] = useState("");
const [phoneNumberError, setPhoneNumberError] = useState("");
const [errors, setErrors] = useState([]);

function sendData(e){
  e.preventDefault();
  let hasErrors = false;

 

  if(Phone_Number.length <= 0){
    hasErrors=true;
    setErrors((prev) => [...prev, "phoneNoError"]);
  }

  if(Email.length <= 0){
    hasErrors=true;
    setErrors((prev) => [...prev, "emailError"]);
  }


  

  if(hasErrors) {
    return;
  }else{
  const newRegisterEvent = {

    Full_Name,
    Address,
    Email,
    Phone_Number,
    No_Guests,
  };
  axios.post("http://localhost:8000/api/RegisterEvent", newRegisterEvent).then(()=>{
    alert("Registered");
     
 
  }).catch((err)=>{
    alert(err)
  });
  window.location.href = "/events/home";
 }
}
   return (

<div class="registrationbackimage">
<div class="container">
<div class="registrationforevent"><h2> Event Registration</h2></div>
<form  class="row g-3">

<div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Will You be attending to this event?
      </label>
    </div>
  </div>


  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Full Name</label>
    <input type="text" value={Full_Name} class="form-control" id="inputEmail4"onChange={(e)=>{ setFull_Name(e.target.value);}}/>
   
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputPassword4"onChange={(e)=>{ setAddress(e.target.value);}}/>
  </div>

  <div class="col-md-6">
    <label for="inputAddress" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputAddress" placeholder="@gamil.com"onChange={(e)=>{ setEmail(e.target.value);}}/>
    {errors.includes("emailError") && (
              <p class="alert-txt">Enter valid email!</p>
            )}
  </div>
  <div class="col-md-6">
    <label for="inputAddress2" class="form-label">Phone Number</label>
    <input type="text" value={Phone_Number} class="form-control" id="inputAddress2" onChange={(e)=>{ setPhone_Number(e.target.value);}}/>
    {errors.includes("phoneNoError") && (
              <p class="alert-txt">Enter valid Phone number!</p>
            )}
  </div>
  
  <div class="col-md-6">
    <label for="inputState" class="form-label">No of Guests</label>
    <select id="inputState" class="form-select"onChange={(e)=>{ setNo_Guests(e.target.value);}}>
      <option selected>Choose...</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>More</option>

    </select>
  </div>
  
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="button"  onClick={sendData}class="btn btn-primary">Register</button>
   
  </div>
 
</form>

</div>
</div>


    );
};

export default RegisterEvent;