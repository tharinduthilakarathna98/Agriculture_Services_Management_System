import React,{useState} from "react";
import AddApp from "../HealthCare/Img/formappoint.jpg";
import axios from "axios";
import {useNavigate, NavLink} from 'react-router-dom';
import swal from 'sweetalert'

export default function AddAppointments(){
  const navigate = useNavigate();

  /*01--create state*/
const [CustomerName,setCustomerName] = useState("");
const [NIC,setNIC] = useState("");
const [AnimalType,setAnimalType] = useState("");
const [ContactNo,setContactNo] = useState("");
const [Address,setAddress] = useState("");
const [Date,setDate] = useState("");
const [Time,setTime] = useState("");


/*02--add*/
function sendAppointment(e){
  e.preventDefault();
  const newAppointment = {
    CustomerName,
    NIC,
    AnimalType,
    ContactNo,
    Address,
    Date,
    Time
  }
 
  if (CustomerName == "" || NIC == "" || AnimalType == "" || Address == "" || Date == "" || Time == ""){
    alert("please fill all the required fields!")
  }else if(ContactNo.length <=9){  swal({text:"please enter valid phone number", icon:"warning"})
  
  }else{
/*url*/
axios.post("http://localhost:8000/api/app/add",newAppointment).then(()=>{
  swal({text:"Appointment Added", icon:"success"});
  navigate(`/HInvoice/${CustomerName}/${NIC}/${AnimalType}/${ContactNo}/${Address}/${Date}/${Time}`)
}).catch((err)=>{
  alert(err)
  console.log(err);
})
  }
}
      return(


        


            <div className="container mt-5" style={{backgroundColor:"", paddingTop:"20px", paddingBottom:"20px", marginBottom:"20px"}}>
              <div className="row">
                <div className="col-sm">
              <div className= "addapp_content">
                <div className="addapp-form" style={{boxShadow: " 4px 2px 2px rgba(63, 217, 33)" , padding:"40px",width:"450px", backgroundColor:""}}>
                  <h2 className="form-title"  style={{paddingLeft:"2px"}}> Get an Appointment</h2><br/>
                  <div className="row">
                  <div className="col col-6">

                  <div className="App-form"  style={{paddingLeft:"100px"}}>
                   
                  <form className="get-appointment" id="appointment-form"
                  onSubmit={sendAppointment}>


                    <div className="form-group d-flex justify-content-around">
                    <label htmlFor="name">
                      <i class="zmdi zmdi-account material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input  type="text" name="name" id="name" autoComplete="off" 
                      placeholder="Your Name" onChange={(e)=>{
                        setCustomerName(e.target.value);
                  }} 
           
                    />
                    </div>
                    <br/>

                    <div class="form-group d-flex justify-content-around">
                    <label htmlFor="NIC">
                      <i class="zmdi zmdi-assignment-account material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="NIC" id="NIC" autoComplete="off"
                      placeholder="Your NIC" onChange={(e)=>{
                        setNIC(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                  
                


                    <div class="form-group d-flex justify-content-around">
                    <label htmlFor="AnimalType">
                      <i class="zmdi zmdi-face material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="AnimalType" id="AnimalType" autoComplete="off" 
                      placeholder="Breed" onChange={(e)=>{
                        setAnimalType(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group d-flex justify-content-around">
                    <label htmlFor="ContactNo">
                      <i class="zmdi zmdi-phone-in-talk material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="ContactNo" id="ContactNo" autoComplete="off"
                      placeholder="Your Mobile No" onChange={(e)=>{
                        setContactNo(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group d-flex justify-content-around">
                    <label htmlFor="Address">
                      <i class="zmdi zmdi-home material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Address" id="Address" autoComplete="off"
                      placeholder="Your Address" onChange={(e)=>{
                        setAddress(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group d-flex justify-content-around">
                    <label htmlFor="Date">
                      <i class="zmdi zmdi-calendar material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Date" id="Date" autoComplete="off"
                      placeholder="Date Required" onChange={(e)=>{
                        setDate(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div class="form-group d-flex justify-content-around">
                    <label htmlFor="Time">
                      <i class="zmdi zmdi-time material-icons-name zmdi-hc-2x"></i>
                    </label>
                    <input type="text" name="Time" id="Time" autoComplete="off"
                      placeholder="Time Required" onChange={(e)=>{
                        setTime(e.target.value);
                  }}
          
                    />
                    </div>
                    <br/>

                    <div className="form-group form-button" style={{paddingLeft:"40px"}}
>
                      <button type="submit" class="btn btn-primary" style={{ backgroundColor: "#12af39" }} >Submit</button>
                    </div>

                  </form>
                  </div>
                  </div>
                </div>
                </div>
                </div>
              </div>
                <div className="col col-6">
    
                    <div className="appointment-image" style={{ marginBottom:"20px" }}>
                    <NavLink to="/HVet" style={{color:"green"}} className="appointment-image-link"><h1>Hi, Your Appointment Here!</h1></NavLink>
                    
                      <figure>
                      <div className="">
                        <img src={AddApp} alt="getAppointment pic" style={{marginRight:"100px"}}/>
                      </div> 
                      </figure>
                    </div>
                    </div>



                    
              </div>
              </div> 
               
            
          
            
            
              
        
    )
}
