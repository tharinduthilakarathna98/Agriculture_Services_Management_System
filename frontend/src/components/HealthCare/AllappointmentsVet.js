import React, {useState,useEffect} from "react";
//import axios from "axios";
// import AddProduct from "./AddProduct";

//import {getAllProducts} from '../../../services/productManagementService'

import {getAllappointments} from './HealthCareServices'

export default function AllappointmentsVet(){

    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        getAllappointments().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setAppointments(data.data.existingPosts)
        })
        
    },[])

    return(
        <div style={{backgroundColor:"#98fb98"}}>
             <center><h1 style={{paddingTop:"30px", boxShadow: " 1px 5px 5px rgba(150, 168, 156)"}}>All Appointments</h1> 
        <div class="row">
            {appointments && appointments.map((appoint,index)=>(
              <div class="col-4" style={{paddingBottom:"30px"}}>
                          

<div 
className="vet-title"
style={{ 

border:"0.5px solid rgba(150, 168, 156)",
marginLeft: "2%",
marginTop: "70px",
color:"white",
borderRadius: "30px",
boxShadow: " 10px 10px 5px rgba(150, 168, 156)",
width:"450px",
backgroundColor:"#ace1af",
padding: "5px",}}>

<div className="inputdiv"
  
 style={{ 
    // backgroundColor: "black",
    //border: "1px solid white",
    width:"300px",
    color:"black",
    margin: "2px",
    position:"center",
    paddingBottom:"10px",
    //border:"2px solid black",
    padding: " 5px 5px 5px", }}>
        <div style={{border: "1px ",width:"200px",height:"40px",borderRadius: "30px", float:"center",backgroundColor:"#ace1af",}}>
        <p style={{ fontSize: "22px",textAlign:"center",padding:"6px",}}>
     <b>AppointmentNo</b>-<b>{index+1}</b>
    </p>
        </div>
   
    <p style={{ fontSize: "15px",textAlign:"left", paddingTop:"20px" }}>
     Customer Name-<b>{appoint.CustomerName}</b>
    </p>
    <p style={{ fontSize: "15px",textAlign:"left" }}>
     NIC-<b>{appoint.NIC}</b>
    </p>
    <p style={{ fontSize: "15px",textAlign:"left"}}>
     Animal Type-<b>{appoint.AnimalType}</b>
    </p>
    <p style={{ fontSize: "15px",textAlign:"left" }}>
     Contact No-<b>{appoint.ContactNo}</b>
    </p>
    <p style={{ fontSize: "15px",textAlign:"left" }}>
     Address-<b>{appoint.Address}</b>
    </p>
    <p style={{ fontSize: "15px",textAlign:"left" }}>
     Date-<b>{appoint.Date}</b>
    </p>
    <p style={{ fontSize: "15px",textAlign:"left" }}>
     Time-<b>{appoint.Time}</b>
    </p>
    </div>

<tr> 
<td>

<a className ="btn btn-success" href="##"  >
    <i className="far fa-trash-alt"></i>&nbsp;CONFIRM</a>&nbsp;    

<a className ="btn btn-danger" href="##" >
    <i className="far fa-trash-alt"></i>&nbsp;REJECT</a>
</td>
</tr>
</div>
</div>
                  
    

     ))}
  </div></center>
            
             
            
        </div>
    )  
}
