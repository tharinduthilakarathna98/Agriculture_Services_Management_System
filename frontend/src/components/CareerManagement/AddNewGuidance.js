import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"; 
import swal from 'sweetalert';


function AddNewGuidance(){
   /*create state*/
   const [programNo,setproNo]=useState("");
   const [programName,setproName]=useState("");
   const [programDescription,setDescription]=useState("");
   const [programImage, setImage]=useState("");
   const [publishedDate,setPublishDate]=useState("");
   const [formErrors, setFormErrors] = useState({});
   const [programNoError, setProgramNoError]=useState({});
   const [errors, setErrors] = useState([]);

   /*add*/
   function sendProgrammData(e){
      e.preventDefault();
      alert("Going to add New Program");
      let hasErrors = false;

      if (programNo.length <= 0) {
         hasErrors = true;
         setErrors((prev) => [...prev, "programNoError"]);
       }

       if (hasErrors) {
         return;
       } else {
      const newProgram = {
       programNo,
       programName,
       programDescription,
       programImage,
       publishedDate,
   };

   /*url*/
   axios.post("http://localhost:8000/api/AddGuidances/",newProgram).then(()=>{
     
    }).catch((err)=>{
      alert(err)
    });
    swal({
      title: "Program is Successfully Added.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "/GuidanceAdmin";
          });
   }
}

 return(  
    <div class="mains"> 
    <div class="wrapperss">
    <div class="titless">
       Add Career Guidance Programs
      </div>
      <div class="forms" >
        <div class="inputfieldss">
            <label>Program No</label>
            <input type="text" class="inputss" required onChange={(e)=>{
               setproNo(e.target.value);
            }}/>
            {errors.includes("programNoError") && (
              <p class="alert-txt">Please Enter Valid Program No</p>
            )}
         </div>
         <div class="inputfieldss">
            <label>Program Name</label>
            <input type="text" class="inputss" required onChange={(e)=>{
               setproName(e.target.value);
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
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendProgrammData}> Add </button>
           
        </div>
      </div>
</div>
    </div>
    
    );
}

export default AddNewGuidance;