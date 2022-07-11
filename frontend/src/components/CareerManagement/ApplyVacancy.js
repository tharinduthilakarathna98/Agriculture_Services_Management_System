import React from "react";
import react,{useState}from "react";
import axios from "axios"; 
import swal from 'sweetalert';

function ApplyVacancy(){
     /*create state*/
     const [position,setPosition]=useState("");
     const [name_with_init,setName]=useState("");
     const [namefull,setFullName]=useState("");
     const [dob,setDOB]=useState("");
     const [nicNo, setNIC]=useState("");
     const [Address, setAddress]=useState("");
     const [Mobile, setMobile]=useState("");
     const [Email, setEmail]=useState("");
     const [linkedIn, setLinkedin]=useState("");
     const [Ordinarylevel, setOrdinary]=useState("");
     const [Advancedlevel, setAdvanced]=useState("");
     const [Degree, setDegree]=useState("");
     const [CV, setCV]=useState("");
     const [formErrors, setFormErrors] = useState({});
     const [nicNoError, setNicNoError]=useState({});
     const [emailError, setEmailError]=useState({});
     const [mobileNoError, setMobileNoError]=useState({});
     const [errors, setErrors] = useState([]);
    
     
     function sendvacancyApplyData(e){
        e.preventDefault();
        alert("Going to Apply for a Vacancy");
        let hasErrors = false;

        const emailModel = /\S+@\S+\.\S+/;
        const nameModel = /^[a-zA-Z]+$/
        var mobile =/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/

        if(!mobile.test(Mobile)){
         hasErrors=true;
         setErrors((prev) => [...prev, "mobileNoError"]);
        }
            
        if(!emailModel.test(Email)){
            hasErrors = true;
            setErrors((prev) => [...prev, "emailError"]);
          }

          if (name_with_init.length <= 0 && !nameModel.test(name_with_init)) {
            hasErrors = true;
            setErrors((prev) => [...prev, "nameError"]);
          }
          if (namefull.length <= 0 && !nameModel.test(namefull)) {
            hasErrors = true;
            setErrors((prev) => [...prev, "nameError2"]);
          }
          if (Address.length <= 0) {
            hasErrors = true;
            setErrors((prev) => [...prev, "addressError"]);
          }
        if (nicNo.length >= 13) {
            hasErrors = true;
            setErrors((prev) => [...prev, "nicNoError"]);
          }
         
          if (Email.length <= 0) {
            hasErrors = true;
            setErrors((prev) => [...prev, "emailError"]);
          }
            
          if (hasErrors) {
            return;
          } else {
    
        const VacancyApply = {
            position,
            name_with_init,
            namefull,
            dob,
            nicNo,
            Address,
            Mobile,
            Email,
            linkedIn,
            Ordinarylevel,
            Advancedlevel,
            Degree,
            CV,
     };
  
     /*url*/
     axios.post("http://localhost:8000/api/Applyvacancies/",VacancyApply).then(()=>{
        
  
      }).catch((err)=>{
        alert(err)
      });
      swal({
        title: "Successfully Submited Your Response",
        icon: "success",
        confirmButtonText: "OK",
          }).then(function () {
              // Redirect the user
              window.location.href = "";
            });
    }
  }
  

 return(  
    <div class="bdy">
 <div class="mainz">
    <div class="h1 text-center text-dark" id="pageHeaderTitle">Apply for Vacancies</div>
    <center>
    <div class="containers" >
    
    <form method="POST" class="appointment-form" id="appointment-form">
                        <div class="value">
                            <div class="input-group">
                                <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="subject" onChange={(e)=>{
                                        setPosition(e.target.value);
                                    }}>
                                        <option diabled="disabled" selected="selected">Choose Applying Position</option>
                                        <option value="Veterinarian">Veterinarian</option>
                                        <option value="Warehouse Manager">Warehouse Manager</option>
                                        <option value="Vegetable Supplier">Vegetable Supplier</option>
                                        <option value="Fruit Supplier">Fruit Supplier</option>
                                        <option value="Software Engineer">Software Engineer</option>
                                    </select>
                                    <div class="select-dropdown"></div>
                                </div>
                            </div>
                        </div>
        <div class="form-group-1">
            <h2 class="h2new">Personal Information</h2>
            <input class="input" type="text" name="nameinit" id="nameinit" placeholder="Name with Initials" required onChange={(e)=>{
                setName(e.target.value);
            }}/>
            {errors.includes("nameError") && (
          <p class="alert-txt">Name is Required </p>
        )}
            <input class="input" type="text" name="name" id="name" placeholder="Name in Full" required onChange={(e)=>{
                setFullName(e.target.value);
            }} />
             {errors.includes("nameError2") && (
          <p class="alert-txt">Full Name is Required </p>
        )}
            <input class="input" type="" name="dob" id="dob" placeholder="Date of Birth" required onChange={(e)=>{
                setDOB(e.target.value);
            }} />
            <input class="input" type="text" name="nic" id="nic" placeholder="NIC" required onChange={(e)=>{
                setNIC(e.target.value);
            }}/>
             {errors.includes("nicNoError") && (
          <p class="alert-txt">Please Enter Valid NIC </p>
        )}
            <h2 class="h2new">Contact Details</h2>
            <input class="input" type="text" name="address" id="address" placeholder="Address" required onChange={(e)=>{
                setAddress(e.target.value);
            }}/>
             {errors.includes("addressError") && (
          <p class="alert-txt">Address is Required </p>
        )}
            <input class="input" type="text" name="mobile" id="mobile" placeholder="Mobile" required onChange={(e)=>{
                setMobile(e.target.value);
            }}/>
             {errors.includes("mobileNoError") && (
          <p class="alert-txt">Please Enter Valid Mobile No</p>
        )}
            <input class="input" type="email" name="email" id="email" placeholder="Email" required onChange={(e)=>{
                setEmail(e.target.value);
            }}/> 
             {errors.includes("emailError") && (
          <p class="alert-txt">Please Enter Valid Email</p>
        )}
            <input class="input" type="link" name="linkedin" id="linkedin" placeholder="LinkedIn" required onChange={(e)=>{
                setLinkedin(e.target.value);
            }}/>
            <h2 class="h2new">Educational Qualifications</h2>
            <div class="select-list">
                <select name="advanced" id="course_type" onChange={(e)=>{
                    setAdvanced(e.target.value);
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
                    setOrdinary(e.target.value);
                }}>
                <option diabled="disabled" selected="selected">Are you Passed Ordinary Level Exam ?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div class="select-list">
                <select name="degree" id="confirm" onChange={(e)=>{
                    setDegree(e.target.value);
                }}>
                <option diabled="disabled" selected="selected">Are you a Degree Holder ?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        </div>
        <h5 class="h5new">Upload Your CV</h5>
                        <div class="value">
                            <div class="input-group js-input-file">
                                <input class="input-file" type="file" name="file_cv" id="file" onChange={(e)=>{
                                    setCV(e.target.value);
                                }}/>
                                
                                <span class="input-file__info">No file chosen</span>
                                <h6 class="h6new">Upload your CV/Resume or any other relevant file. Max file size 50 MB</h6>
                            </div>
                            
                        </div>
        <div class="form-check">
            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
        </div>
        <button type="button" class="btn btn-primary btn-sm"  onClick={sendvacancyApplyData}>Apply Now </button>
    </form>
</div>
    </center>
    
    </div>

    </div>
         
  );
}

export default ApplyVacancy;