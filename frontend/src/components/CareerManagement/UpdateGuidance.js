import react,{useEffect} from "react";
import {Link,useParams} from "react-router-dom";
import React,{useState} from "react";
import axios from "axios"; 
import swal from 'sweetalert';

function UpdateGuidance(){
    
   const {id} = useParams();
   /*create state*/
   const [programNo,setproNo]=useState("");
   const [programName,setproName]=useState("");
   const [programDescription,setDescription]=useState("");
   const [programImage, setImage]=useState("");
   const [publishedDate,setPublishDate]=useState("");
 
   /*add*/

   function sendProgrammData(e){
      e.preventDefault();
      alert("Going to Update Program");
  
      const newProgram = {
       programNo,
       programName,
       programDescription,
       programImage,
       publishedDate,
   }
  
   /*url*/
   axios.put(`http://localhost:8000/api/AddGuidances/${id}`,newProgram).then(()=>{
      

    }).catch((err)=>{
      alert(err)
      console.log(err);
    })
    swal({
      title: "Program is Successfully Updated.",
      icon: "success",
      confirmButtonText: "OK",
        }).then(function () {
            // Redirect the user
            window.location.href = "/GuidanceAdmin";
          });
}
useEffect(() => {
    axios.get(`http://localhost:8000/api/AddGuidances/${id}`).then(res => {
        setDescription(res.data.programDescription);
        setproName(res.data.programName);
        setproNo(res.data.programNo);
        setImage(res.data.programImage);
        setPublishDate(res.data.publishedDate);
        console.log(res.data);
        })		
    }, []) 

 return(  
    <div class="mains"> 
    <div class="wrapperss">
    <div class="titless">
       Update Career Guidance Programs
      </div>
      <div class="forms" >
        <div class="inputfieldss">
            <label>Program No</label>
            <input value={programNo} type="text" class="inputss" required onChange={(e)=>{
               setproNo(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Program Name</label>
            <input value={programName} type="text" class="inputss" required onChange={(e)=>{
               setproName(e.target.value);
            }}/>
         </div>
         <div class="inputfieldss">
            <label>Description</label>
            <input value={programDescription} type="text" class="inputss" required onChange={(e)=>{
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
            <input value={programImage} type="link" class="inputss"  onChange={(e)=>{
                  setImage(e.target.value);
            }}/>
         </div>
                       
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={sendProgrammData}> <Link to={`/GuidanceAdmin/`} >Update </Link> </button>
           
        </div>
      </div>
</div>
    </div>
    
    );
}

export default UpdateGuidance;