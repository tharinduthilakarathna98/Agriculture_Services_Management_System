import React, {useState,useEffect} from "react";
import axios from "axios";
import swal from "sweetalert";

//import {getAllProducts} from '../../../services/productManagementService'

import {getAllappointments} from './HealthCareServices'

export default function AllappointmentsVet(){

    const [appointments, setAppointments] = useState([]);
    const [userappointment , setSearch] = useState("");

    useEffect(()=>{
        getAllappointments().then((data)=>{
            console.log("data>>", data.data.existingPosts)
            setAppointments(data.data.existingPosts)
        })
        
    },[])

    const onDelete= (id)=>{
        axios.delete(`http://localhost:8000/api/app/delete/${id}`).then((reponse)=>{
           swal({title:"Delete Appointment", text:"Do you want to delete?", icon:"warning", buttons:"Ok", dangerMode:true}).then(reponse=>{
               swal({text:"Appointment Deleted", icon:"success"})
           });
           //getAllappointments();
        })
  };

    return(
        <div style={{backgroundColor:""}}>
             <center><h1 style={{paddingTop:"20px"}}>All Appointments</h1> 

             <input type="text"
                placeholder="Which Date You Want" 
                className="text111"
                name="search2"
                onChange ={(e)=>{
                setSearch(e.target.value);
        }}
   style={{border:"none", marginTop:"50px",
   marginBottom:"20px",
   width:"27%",
   marginLeft:"5%",
   boxShadow:" 10px 10px 5px rgba(150, 168, 156)",
   
}}
  
  
  />

<button type="submit" style={{color:"red"}}><i class="fa fa-search"></i></button>

        <div class="row">
            {appointments && appointments.filter(value=>{
                if(userappointment ===""){
                    return value;
                }else if(
                    value.Date.toLowerCase().includes(userappointment.toLocaleLowerCase())
                ){
                    return value
                }

            }).map((appoint,index)=>(
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
backgroundColor:"",
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
        <div style={{border: "1px ",width:"200px",height:"40px",borderRadius: "30px", float:"center",backgroundColor:"",}}>
        <p style={{ fontSize: "22px",textAlign:"center",padding:"6px",}}>
     <b>No</b>-<b>{index+1}</b>
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

{/* <a className ="btn btn-success" href="##"  >
    <i className="far fa-trash-alt"></i>&nbsp;CONFIRM</a>&nbsp;     */}

<a className ="btn btn-danger" href="##"
 onClick={()=> onDelete(appoint._id)} >
    <i className="far fa-trash-alt"></i>&nbsp;DELETE</a>
</td>
</tr>
</div>
</div>
                  
    

     ))}
  </div></center>
            
             
            
        </div>
    )  
}
