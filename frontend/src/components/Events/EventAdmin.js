
import React, { useEffect, useState } from "react";
import './eventAdmin.css';
import {Link} from 'react-router-dom';
import axios from "axios";



function EventAdmin(){
    const [event, setEvent] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/Addevent/all").then(res => {
           setEvent(res.data);
           console.log(res.data);
        })		
        }, [])

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/Addevent/${id}`).then((res) => {
              alert("Event Deleted Successfully!");
            });
            window.location.reload(false);
          };


return (

<>

<body class="adminbody">
<div class="container-xl">
    <div class="table-responsive">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-6"><h2><b>Manage</b><b>Events</b></h2></div>
                <div>
                    <Link to="/events/add" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-plus"></i> <span>Add New Events</span></Link>
                    
                    </div>
                </div>
            </div>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Event ID&nbsp;</th>
                        <th>Event Name</th>
                        <th>Category&nbsp;</th>
                        <th>Start_Date&nbsp;</th>
                        <th>Start_Time</th>
                        <th>Venue</th>
                        
                    </tr>
                </thead>
                <tbody>
                {event && event.map((ev, i) => (
                             <tr data-status="active">
                                <td>{ev.Event_Id}</td>
                                <td>{ev.Event_Name}</td>
                                <td><span class="label label-success">{ev.Category}</span></td>
                                <td>{ev.Start_Date}</td>
                                <td>{ev.Start_Time}</td>
                                <td>{ev.Venue}</td>
                                <td><Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(ev._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link></td>
                                <td><button class="btn btn-sm manage"  > <Link to={`/events/update/${ev._id}`} > Update </Link>  </button></td>
                             </tr>

                         ))}

                   
                </tbody>
            </table>
        </div> 
    </div>   
</div> 
</body>














</>



    );
}
export default EventAdmin