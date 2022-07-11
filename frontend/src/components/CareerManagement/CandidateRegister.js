import react from "react";
import {Link} from "react-router-dom";
import React,{useState}from "react";
import axios from "axios"; 
import swal from 'sweetalert';

function CandidateRegister(){
     /*create state*/
     const [name_with_initials,setnme]=useState("");
     const [name_in_full,setFullNme]=useState("");
     const [date_of_birth,setDob]=useState("");
     const [nic, setNic]=useState("");
     const [address, setAddrss]=useState("");
     const [mobile, setMobiles]=useState("");
     const [email, setEmails]=useState("");
     const [linked_in_profile, setLinkedins]=useState("");
     const [ordinarylevel, setOrdinarys]=useState("");
     const [advancedlevel, setAdvanceds]=useState("");
     const [degree, setDegrees]=useState("");
     const [cv, setCVs]=useState("");
     const [formErrors, setFormErrors] = useState({});
     const [nicNoError, setNicNoError]=useState({});
     const [emailError, setEmailError]=useState({});
     const [mobileNoError, setMobileNoError]=useState({});
     const [errors, setErrors] = useState([]);
    
     /*add*/
     function sendCandidateData(e){
        e.preventDefault();
        alert("Going to Register as an Candidate");
        let hasErrors = false;

        const emailModel = /\S+@\S+\.\S+/;
        const nameModel = /^[a-zA-Z]+$/
        var mobiles =/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/

        if(!mobiles.test(mobile)){
        hasErrors=true;
        setErrors((prev) => [...prev, "mobileNoError"]);
       }
            
        if(!emailModel.test(email)){
          hasErrors = true;
          setErrors((prev) => [...prev, "emailError"]);
        }
        if (name_with_initials.length <= 0 && !nameModel.test(name_with_initials)) {
            hasErrors = true;
            setErrors((prev) => [...prev, "nameError"]);
          }
          if (name_in_full.length <= 0 && !nameModel.test(name_in_full)) {
            hasErrors = true;
            setErrors((prev) => [...prev, "nameError2"]);
          }
          if (address.length <= 0) {
            hasErrors = true;
            setErrors((prev) => [...prev, "addressError"]);
          }
         
        if (nic.length >= 13) {
            hasErrors = true;
            setErrors((prev) => [...prev, "nicNoError"]);
          }
          if (email.length <= 0) {
            hasErrors = true;
            setErrors((prev) => [...prev, "emailError"]);
          }
        
          if (hasErrors) {
            return;
          } else {
    
        const CandidateRegister = {
            name_with_initials,
            name_in_full,
            date_of_birth,
            nic,
            address,
            mobile,
            email,
            linked_in_profile,
            ordinarylevel,
            advancedlevel,
            degree,
            cv,
     };
  
     /*url*/
     axios.post("http://localhost:8000/api/Candidate/",CandidateRegister).then(()=>{
     
      }).catch((err)=>{
        alert(err)
      });
      swal({
        title: "Successfully Registered",
        icon: "success",
        confirmButtonText: "OK",
          }).then(function () {
              // Redirect the user
              window.location.href = "";
            });
    }
  }
  
 return(  
    
    <div class="mainzzz">
    <div class="h1 text-center text-dark" id="pageHeaderTitle">Register as an Candidate</div>
    <center>
    <div class="containers" >
    
    <form method="POST" class="appointment-form" id="appointment-form">
                      
        <div class="form-group-1">
            <h2 class="h2new">Personal Information</h2>
            <input class="input" type="text" name="nameinit" id="nameinit" placeholder="Name with Initials" required onChange={(e)=>{
                setnme(e.target.value);
            }} />
            {errors.includes("nameError") && (
          <p class="alert-txt">Name is Required </p>
        )}
            <input class="input" type="text" name="name" id="name" placeholder="Name in Full" required onChange={(e)=>{
                setFullNme(e.target.value);
            }} />
             {errors.includes("nameError2") && (
          <p class="alert-txt">Name is Required </p>
        )}
            <input class="input" type="" name="dob" id="dob" placeholder="Date of Birth" required onChange={(e)=>{
                setDob(e.target.value);
            }} />
            <input class="input" type="text" name="nic" id="nic" placeholder="NIC" required onChange={(e)=>{
                setNic(e.target.value);
            }}/>
             {errors.includes("nicNoError") && (
          <p class="alert-txt">Please Enter Valid NIC </p>
        )}
            <h2 class="h2new">Contact Details</h2>
            <input class="input" type="text" name="address" id="address" placeholder="Address" required onChange={(e)=>{
                setAddrss(e.target.value);
            }}/>
             {errors.includes("addressError") && (
          <p class="alert-txt">Address is Required </p>
        )}
            <input class="input" type="text" name="mobile" id="mobile" placeholder="Mobile" required onChange={(e)=>{
                setMobiles(e.target.value);
            }}/>
             {errors.includes("mobileNoError") && (
          <p class="alert-txt">Please Enter Valid Mobile No</p>
        )}
            <input class="input" type="email" name="email" id="email" placeholder="Email" required onChange={(e)=>{
                setEmails(e.target.value);
            }}/>
            {errors.includes("emailError") && (
          <p class="alert-txt">Please Enter Valid Email</p>
        )}
            <input class="input" type="link" name="linkedin" id="linkedin" placeholder="LinkedIn" required onChange={(e)=>{
                setLinkedins(e.target.value);
            }}/>
            <h2 class="h2new">Educational Qualifications</h2>
            <div class="select-list">
            <select name="advanced" id="course_type" onChange={(e)=>{
                    setAdvanceds(e.target.value);
                }}>
                    <option diabled="disabled" selected="selected">Are you Passed Advanced Level Exam ?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        </div>
        <div class="form-group-2">
            <div class="select-list">
            <select name="ordinary" id="confirm_type" onChange={(e)=>{
                    setOrdinarys(e.target.value);
                }}>
                    <option diabled="disabled" selected="selected" >Are you Passed Ordinary Level Exam ?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="select-list">
            <select name="degree" id="confirm" onChange={(e)=>{
                    setDegrees(e.target.value);
                }}>
                    <option diabled="disabled" selected="selected">Are you a Degree Holder ?</option>
                    <option seleected value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        </div>
        <h5 class="h5new">Upload Your CV</h5>
                        <div class="value">
                            <div class="input-group js-input-file">
                            <input class="input-file" type="file" name="file_cv" id="file" onChange={(e)=>{
                                    setCVs(e.target.value);
                                }}/>
                               
                                <span class="input-file__info">No file chosen</span>
                                <h6 class="h6new">Upload your CV/Resume or any other relevant file. Max file size 50 MB</h6>
                            </div>
                            
                        </div>
        <div class="form-check">
            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
            <label for="agree-term" class="label-agree-term"><span><span></span></span>  I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
        </div>
        <button type="button" class="btn btn-primary btn-sm"  onClick={sendCandidateData}>Register Now </button>
    </form>
</div>
    </center>
    
    </div>

  );
}

export default CandidateRegister;