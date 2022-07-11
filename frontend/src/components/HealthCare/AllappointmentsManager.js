import React, {useState,useEffect} from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import {Link} from "react-router-dom"



import {getAllappointments} from './HealthCareServices'
import swal from "sweetalert";

export default function AllappointmentsManager(){
    const navigate = useNavigate()

    const [appointments,setAppointments] = useState([]);
    const [AppointmentSearch , setSearch] = useState("");

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
        <div>
            <center><h1  style={{PaddingTop:"10px"}} >Appointments</h1></center>

            <input type="text"
                placeholder="Search.." 
                className="text111"
                name="search2"
                onChange ={(e)=>{
                setSearch(e.target.value);
        }}
   style={{border:"none", marginTop:"50px",
   marginBottom:"20px",
   width:"40%",
   marginLeft:"30%",
   boxShadow:" 10px 10px 5px rgba(150, 168, 156)",

}}
  
  
  />
  <button type="submit" style={{color:"red"}}><i class="fa fa-search"></i></button>
           
                   <div className="container">
                      <table className ="table table-bordered">
                 <thead>
                     <tr>
                      <th scope ="col" className="HRth"  >No</th>  
                      <th scope ="col" className="HRth" >Customer Name</th>
                      <th scope ="col" className="HRth" >NIC</th>
                      <th scope ="col" className="HRth" >Animal Type</th>     
                      <th scope ="col" className="HRth" >Contact No</th> 
                      <th scope ="col" className="HRth" >Address</th> 
                      <th scope ="col" className="HRth" >Date</th> 
                      <th scope ="col" className="HRth" >Time</th> 
                      <th scope ="col" className="HRtd" >Action</th> 
                    </tr> 
                </thead> 
                <tbody> 

                {appointments && appointments.filter(value=>{
                    if(AppointmentSearch ===""){
                        return value;
                    }else if(
                        value.AnimalType.toLowerCase().includes(AppointmentSearch.toLowerCase())
                    ){
                        return value
                    }
                }).map((appoint,index)=>{
                return(
                   <tr>
                    <td className="HRtd" >{index+1}</td>
                    <td className="HRtd">{appoint.CustomerName}</td>
                    <td className="HRtd" >{appoint.NIC}</td>
                    <td className="HRtd">{appoint.AnimalType}</td>
                    <td className="HRtd">{appoint.ContactNo}</td>
                    <td className="HRtd">{appoint.Address}</td>
                    <td className="HRtd">{appoint.Date}</td>
                    <td className="HRtd">{appoint.Time}</td>
                    <td>
                     <div className="btn btn-success" onClick={()=>{navigate("/HMUpdate", {
                         state:{appoint},
                     })}}>
                     <i className="fas fa-edit"></i>&nbsp;EDIT</div>&nbsp; 

                     <a className ="btn btn-danger" href="##" style={{backgroundColor:"", border:"none"}}
                         onClick={()=> onDelete(appoint._id)}>
                     <i className="far fa-trash-alt"></i>&nbsp;DELETE</a>
                    </td> 
                    
                   </tr>
                     );
            })
             
            }
            </tbody>
            </table>
                   </div>
            
                   { <Link to={`/AllAppointmentReport`} 
                      className ="btn btn-success"  
                      style={{marginTop:"40px",border:"1px solid green",marginBottom:"70px",borderRadius:"5px", fontSize:"20px" ,marginLeft:"130px",marginRight:"20px" ,height:"45px",width:"150px"}}>
                      Report
                    </Link>}
  
            
        </div>
    )  
}
