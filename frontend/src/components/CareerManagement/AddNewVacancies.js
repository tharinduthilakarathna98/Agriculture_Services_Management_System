import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; 
import swal from 'sweetalert';

function AddNewVacancies(){
   /*create state*/
   const [vacancyNo,setvacancyNo]=useState("");
   const [jobTitle,setTitle]=useState("");
   const [jobDescription,setDescription]=useState("");
   const [publishedDate,setPublishDate]=useState("");
   const [jobImage, setImage]=useState("");
   const [formErrors, setFormErrors] = useState({});
   const [vacancyNoError, setVacancyNoError]=useState({});
   const [errors, setErrors] = useState([]);
  
   /*add*/
   function sendvacancyData(e){
      e.preventDefault();
      alert("Going to add New Vacancy");
      let hasErrors = false;
   
      if (vacancyNo.length <= 0) {
         hasErrors = true;
         setErrors((prev) => [...prev, "vacancyNoError"]);
       }

       if (hasErrors) {
         return;
       } else {

      const newVacancy = {
       vacancyNo,
       jobTitle,
       jobDescription,
       publishedDate,
       jobImage,
   };

   /*url*/
   axios.post("http://localhost:8000/api/AddVacancies/",newVacancy).then(()=>{
     
    }).catch((err)=>{
      alert(err)
    });
    swal({
      title: "Vacancy is Successfully Added.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "/VacancyAdmin";
          });
   }
}

 return(  
   <div class="mains"> 
    <div class="wrapperss">
    <div class="titless">
       Add New Vacancies
      </div>
      <div class="forms" >
        <div class="inputfieldss">
            <label>Vacancy No</label>
            <input type="text" class="inputss" required onChange={(e)=>{
               setvacancyNo(e.target.value);
            }}/>
            {errors.includes("vacancyNoError") && (
              <p class="alert-txt">Please Enter Valid Vacancy No</p>
            )}
         </div>
         <div class="inputfieldss">
            <label>Job Title</label>
            <input type="text" class="inputss" required onChange={(e)=>{
               setTitle(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Description</label>
            <input type="text" class="inputss" required onChange={(e)=>{
               setDescription(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Published Date</label>
            <input type="date" class="inputss" required onChange={(e)=>{
                  setPublishDate(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Image</label>
            <input type="link" class="inputss"  onChange={(e)=>{
                  setImage(e.target.value);
            }}/>
         </div>
                       
          <div class="modal-footers">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendvacancyData}> Add </button>
           
        </div>
      </div>
</div>
    </div>
    
    );
}

export default AddNewVacancies;