import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import React,{useState} from "react";
import axios from "axios";
import swal from 'sweetalert'; 

function UpdateVacancies(){

   const {id} = useParams();
   /*create state*/
   const [vacancyNo,setvacancyNo]=useState("");
   const [jobTitle,setTitle]=useState("");
   const [jobDescription,setDescription]=useState("");
   const [publishedDate,setPublishDate]=useState("");
   const [jobImage, setImage]=useState("");
  
   /*add*/
   function sendvacancyData(e){
      e.preventDefault();
      alert("Going to Update Vacancy");
  
      const newVacancy = {
       vacancyNo,
       jobTitle,
       jobDescription,
       publishedDate,
       jobImage,
   }

   /*url*/
   axios.put(`http://localhost:8000/api/AddVacancies/${id}`,newVacancy).then(()=>{

    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
    swal({
      title: "Vacancy is Successfully Updated.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "/VacancyAdmin";
          });
    
}
   useEffect(() => {
    axios.get(`http://localhost:8000/api/AddVacancies/${id}`).then(res => {
        setvacancyNo(res.data.vacancyNo);
        setTitle(res.data.jobTitle);
        setDescription(res.data.jobDescription);
        setImage(res.data.jobImage);
        setPublishDate(res.data.publishedDate);
        console.log(res.data);
        })		
    }, []) 

 return(  
   <div class="mains"> 
    <div class="wrapperss">
    <div class="titless">
       Update Vacancy
      </div>
      <div class="forms">
        <div class="inputfieldss">
            <label>VacancyNo</label>
            <input value={vacancyNo} type="text" class="inputss" required onChange={(e)=>{
                setvacancyNo(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Job Title</label>
            <input value={jobTitle} type="text" class="inputss" required onChange={(e)=>{
               setTitle(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Description</label>
            <input value={jobDescription} type="text" class="inputss" required onChange={(e)=>{
               setDescription(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Published Date</label>
            <input value={publishedDate} type="date" class="inputss" required onChange={(e)=>{
               setPublishDate(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Image</label>
            <input value={jobImage} type="link" class="inputss" onChange={(e)=>{
               setImage(e.target.value);
            }}/>
            
         </div>
                       
          <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendvacancyData}> <Link to={`/VacancyAdmin/`} >Update </Link></button>
        </div>
      </div>
</div>
</div>
    );
}

export default UpdateVacancies;