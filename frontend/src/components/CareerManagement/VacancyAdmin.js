import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 

function VacancyAdmin(){
    const [vacancy, setVacancy] = useState([])
    const [VacancySearch , setcrsSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/AddVacancies/all").then(res => {
           setVacancy(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/AddVacancies/${id}`).then((res) => {
              alert("Vacancy Deleted Successfully!");
            });
            window.location.reload(false);
          };

    return(
        <div>
         <div class="h1 text-center text-dark" id="pageHeaderTitle">Vacancies Admin Dashboard</div>

         <div class="card shodow mb-4">
           <div class="card-header py-3">
           <div>
                            <button  class="btn btn-secondary" data-toggle="modal"  > <Link to={`/AddNewVacancies/`} > Add New Vacancies</Link>  </button>
                            </div>

                            <div className="input-group" style={{ width: "30rem",  }}>
                       <div class="srch"> <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Search Vacancy" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button></div>
         </div>
         
            <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
               <thead>
                   <tr>
                       <th>VacancyNo&nbsp;</th>
                       <th>Job Title</th>
                       <th>Job Description&nbsp;</th>
                       <th>Image</th>
                       <th>PublishedDate</th>
                       <th>Delete</th>
                       <th>Update</th>
                   </tr>
               </thead>
               <tbody>
                  
               {vacancy && vacancy.filter(value=>{
            if(VacancySearch ===""){
                return value;
            }else if(
                value.jobTitle.toLowerCase().includes(VacancySearch.toLowerCase())
            ){
                return value
            }
        }).map((vaca, i) => (

                            <tr data-status="active">
                               <td>{vaca.vacancyNo}</td>
                               <td>{vaca.jobTitle}</td>
                               <td><span class="label label-success">{vaca.jobDescription}</span></td>
                               <td>{vaca.jobImage}</td>
                               <td>{vaca.publishedDate}</td>
         
                    <td>
                    <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(vaca._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link>
                     </td>
                     <td>
                     <button className="btn btn-warning"  > <Link to={`/UpdateVacancy/${vaca._id}`} > Update </Link>  </button>
                     </td>
                     </tr>

                        ))}
                  
               </tbody>
           </table>
       </div> 
   </div>   
</div> 
        </div>
        
</div>
    );
    }
export default VacancyAdmin;