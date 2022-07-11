import  React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'

export default function CustomerInvoice(){

  const [CustomerName,setCustomerName] = useState("");
  const [NIC,setNIC] = useState("");
  const [AnimalType,setAnimalType] = useState("");
  const [ContactNo,setContactNo] = useState("");
  const [Address,setAddress] = useState("");
  const [date,setDate] = useState("");
  const [Time,setTime] = useState("");

  const params = useParams();

  useEffect(() => {
    setCustomerName(params.CustomerName);
    setNIC(params.NIC);
    setAnimalType(params.AnimalType);
    setContactNo(params.ContactNo);
    setAddress(params.Address);
    setDate(params.date);
    setTime(params.Time);
  }, [params])

    return(

 <div style={{backgroundColor:""}}>
      
<div style={{marginLeft:"200px", width:"800px", paddingBottom:"30px", paddingTop:"60px"}}>
<div className="addapp-form" style={{backgroundColor:"#98fb98",marginLeft:"180px", border: "1px solid", 
  boxShadow: "5px 10px #888888",width:"600px", paddingBottom:"30px", paddingTop:"30px"}}>
<center>
<form>

 <h1 style={{paddingLeft:"20px"}}>INVOICE</h1>

<div class="form-group row" style={{paddingLeft:"140px", paddingTop:"30px"}}>
    <label for="inputPassword" class="col-sm-2 col-form-label">Name</label>
    <div class="col-sm-6">
      <input value={CustomerName} 
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                    }} class="form-control" id="iName" />
    </div>
  </div>

  <div class="form-group row" style={{paddingLeft:"140px", paddingTop:"30px"}} >
    <label for="inputPassword" class="col-sm-2 col-form-label">NIC</label>
    <div class="col-sm-6">
      <input value={NIC} 
                onChange={(e) => {
                  setNIC(e.target.value);
                }} class="form-control" id="iNIC"/>
    </div>
  </div>

  <div class="form-group row"  style={{paddingLeft:"140px",paddingTop:"30px"}}>
    <label for="inputPassword" class="col-sm-2 col-form-label">Breed</label>
    <div class="col-sm-6">
      <input value={AnimalType} 
                onChange={(e) => {
                  setAnimalType(e.target.value);
                }} class="form-control" id="iBreed" />
    </div>
  </div>

  <div class="form-group row" style={{paddingLeft:"140px",paddingTop:"30px"}} >
    <label for="inputPassword" class="col-sm-2 col-form-label">Contact</label>
    <div class="col-sm-6">
      <input value={ContactNo} 
                onChange={(e) => {
                  setContactNo(e.target.value);
                }} class="form-control" id="iContact" />
    </div>
  </div>

  <div class="form-group row" style={{paddingLeft:"140px",paddingTop:"30px"}}   >
    <label for="inputPassword" class="col-sm-2 col-form-label">Address</label>
    <div class="col-sm-6">
      <input value={Address}
              onChange={(e) => {
                setAddress(e.target.value)
              }} class="form-control" id="iAddress" />
    </div>
  </div>

  <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
    <label for="inputPassword" class="col-sm-2 col-form-label">Date</label>
    <div class="col-sm-6">
      <input value={date}
              onChange={(e) => {
                setDate(e.target.value)
              }} class="form-control" id="iDate" />
    </div>
  </div>

  <div class="form-group row"style={{paddingLeft:"140px",paddingTop:"30px"}} >
    <label for="inputPassword" class="col-sm-2 col-form-label">Time</label>
    <div class="col-sm-6">
      <input value={Time} 
              onChange={(e) => {
                setTime(e.target.value)
              }} class="form-control" id="iTime" />
    </div>
  </div>

</form>

  </center>
  </div>
  </div> 
  </div>  
  )
} 


 
