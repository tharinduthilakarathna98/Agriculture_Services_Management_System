import React from 'react'
import react,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import './eventshome.css';
import agri5 from "./eventimages/agri5.jpg";
import agri from "./eventimages/agri.jpg";
import agri4 from "./eventimages/agri4.jpg";
import agri2 from "./eventimages/agri2.jpg";
import agri7 from "./eventimages/agri7.jpg";
import agri8 from "./eventimages/agri8.jpg";



function Eventshome(){

    const [events,setEvents] = useState([]);
    useEffect(() =>{

    axios.get("http://localhost:8000/api/Addevent/all").then((res) =>{
                    setEvents(res.data);
                    console.log(res.data);
    
            })
    },[])
    
  return (
<div>
<div class="homebackgroundgg">
        <div class="header">
        <div class="img-parent">
            <img  src={agri5} alt=""></img>
            </div>
        <div class="img-overlay"></div>


        <div class="img-content">
        <div class="container justify-content-center">
    <div class="row">
        <div class="col-md-8">
            <div class="input-group mb-3"> <input type="text" class="form-control eventshomeformcontrol input-text" placeholder="Search for Events...." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <div class="input-group-append"> <button class="btn eventshomebtn btn-outline-warning btn-lg" type="button"><i class="fa fa-search"></i></button> </div>
            </div>
        </div>
    </div>
</div>
            
        <h2>Schedule Event</h2>
        <span>The e-Agriculture is a platform of choice for many as they receive news related to ICTs for agriculture. Furthermore, daily around the world a number of events related to ICTs for agriculture are taking place. These may be trainings, meetings, workshops related to the use and upscale of technologies in agriculture
        </span>
        </div>
        </div>
     <div class="event-type">

         <h4>Virtual Events</h4>
         <p></p>
<hr class="solid"/>
     </div>
     
     /*card */
     
     <div class="EventsHomecontainer event">
     {events &&
          events.map((ev) => (
         <div class="row justify-content-center text-center">
             <div class="offset-sm-1 col-sm-5">
                 
<img src={agri} alt="" class="img-fluid"></img>

            <div class="event-content">

                <h4>{ev.Event_Name}</h4>
                <div class="info-item">
                                    <span class="lnr lnr-apartment"></span>
                                    <span class="unit">Description:</span>
                                 {ev.Description}
                                </div>

                <span></span><br></br>
                <section class="homesection">
                            <h6>Event Information</h6>
                            <div class="info">
                                <div class="info-item">
                                    <span class="lnr lnr-calendar-full"></span>
                                    <span class="unit">Start_Date</span>
                                    {ev.Start_Date}
                                </div>
                                <div class="info-item">
                                    <span class="lnr lnr-clock"></span>
                                    <span class="unit">Start_Time:</span>
                             {ev.Start_Time}
                                </div>
                                <div class="info-item">
                                    <span class="lnr lnr-apartment"></span>
                                    <span class="unit">Venue:</span>
                                 {ev.Venue}
                                </div>
                            
                            </div>
                        </section>
						<Link to="/events/register" >join</Link>
                       
   </div>

   </div>
  </div> 
   ))}        
 </div>

</div>

</div>
    
  );
}

export default Eventshome