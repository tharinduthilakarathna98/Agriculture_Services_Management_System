import React from "react";
import react,{useState}from "react";
import axios from "axios"; 
import swal from 'sweetalert';

function ApplyGuidance(){
   /*create state*/
   const [program,setProgram]=useState("");
   const [name_with_in,setname]=useState("");
   const [nameinfull,setFullname]=useState("");
   const [nic_no, setnic]=useState("");
   const [address_g, setaddress]=useState("");
   const [mobile_no, setmobile]=useState("");
   const [email_g, setemail]=useState("");
   const [Ordinarylevel, setordinary]=useState("");
   const [formErrors, setFormErrors] = useState({});
   const [nicNoError, setNicNoError]=useState({});
   const [emailError, setEmailError]=useState({});
   const [mobileNoError, setMobileNoError]=useState({});
   const [errors, setErrors] = useState([]);
  
   /*add*/
   function sendguidanceApplyData(e){
      e.preventDefault();
      alert("Going to Apply for a Guidance Program");
      let hasErrors = false;
 
      const emailModel = /\S+@\S+\.\S+/;
      const nameModel = /^[a-zA-Z]+$/
      var mobilesd =/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{3}[-|\s]?\d{4}$/

      if(!mobilesd.test(mobile_no)){
        hasErrors=true;
        setErrors((prev) => [...prev, "mobileNoError"]);
       }
            
      if(!emailModel.test(email_g)){
        hasErrors = true;
        setErrors((prev) => [...prev, "emailError"]);
      }
      if (name_with_in.length <= 0 && !nameModel.test(name_with_in)) {
        hasErrors = true;
        setErrors((prev) => [...prev, "nameError"]);
      }
      if (nameinfull.length <= 0 && !nameModel.test(nameinfull)) {
        hasErrors = true;
        setErrors((prev) => [...prev, "nameError2"]);
      }
      if (address_g.length <= 0) {
        hasErrors = true;
        setErrors((prev) => [...prev, "addressError"]);
      }
      if (nic_no.length >= 13) {
        hasErrors = true;
        setErrors((prev) => [...prev, "nicNoError"]);
      }
      if (email_g.length <= 0) {
        hasErrors = true;
        setErrors((prev) => [...prev, "emailError"]);
      }
      
      if (hasErrors) {
        return;
      } else {

      const GuidanceApply = {
          program,
          name_with_in,
          nameinfull,
          nic_no,
          address_g,
          mobile_no,
          email_g,
          Ordinarylevel,
          
   };

   /*url*/
   axios.post("http://localhost:8000/api/Applyguidances/",GuidanceApply).then(()=>{

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
    
          <div class="mainzz">
    <div class="h1 text-center text-dark" id="pageHeaderTitle">Register for Career Guidance Programs</div>

    <center>
    <div class="containers" >
    
    <form method="POST" class="appointment-form" id="appointment-form" >
                        <div class="value">
                            <div class="input-group">
                                <div class="rs-select2 js-select-simple select--no-search">
                                    <select name="subject" onChange={(e)=>{
                                        setProgram(e.target.value);
                                    }}>
                                        <option disabled="disabled" selected="selected">Choose Applying Program</option>
                                        <option value="Product Development Training">Product Development Training</option>
                                        <option value="Analytical Chemist Training">Analytical Chemist Training</option>
                                        <option value="Haevy Machinery Training">Haevy Machinery Training</option>
                                    </select>
                                    <div class="select-dropdown"></div>
                                </div>
                            </div>
                        </div>
        <div class="form-group-1">
            <h2 class="h2new">Personal Information</h2>
            <input class="input" type="text" name="nameinit" id="nameinit" placeholder="Name with Initials" required onChange={(e)=>{
                setname(e.target.value);
            }} />
             {errors.includes("nameError") && (
          <p class="alert-txt">Name is Required </p>
        )}
            <input class="input" type="text" name="name" id="name" placeholder="Name in Full" required onChange={(e)=>{
                setFullname(e.target.value);
            }}/>
             {errors.includes("nameError2") && (
          <p class="alert-txt">Fulll Name is Required </p>
        )}
            <input class="input" type="text" name="nic" id="nic" placeholder="NIC" required onChange={(e)=>{
                setnic(e.target.value);
            }}/>
             {errors.includes("nicNoError") && (
          <p class="alert-txt">Please Enter Valid NIC </p>
        )}
            <h2 class="h2new">Contact Details</h2>
            <input class="input" type="text" name="address" id="address" placeholder="Address" required onChange={(e)=>{
                setaddress(e.target.value);
            }}/>
             {errors.includes("addressError") && (
          <p class="alert-txt">Address is Required </p>
        )}
            <input class="input" type="text" name="mobile" id="mobile" placeholder="Mobile" required onChange={(e)=>{
                setmobile(e.target.value);
            }}/>
              {errors.includes("mobileNoError") && (
          <p class="alert-txt">Please Enter Valid Mobile No</p>
        )}
            <input class="input" type="email" name="email" id="email" placeholder="Email" required onChange={(e)=>{
                setemail(e.target.value);
            }}/>
              {errors.includes("emailError") && (
          <p class="alert-txt">Please Enter Valid Email</p>
        )}
            <h2 class="h2new" >Educational Qualifications</h2>
            <div class="select-list">
                <select name="type" onChange={(e)=>{
                    setordinary(e.target.value);
                }} >
                    <option diabled="disabled" selected="selected">Are you Passed Ordinary Level Exam ?</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
        </div>
        
        <div class="form-check">
            <input  type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
            <label for="agree-term" class="label-agree-term"><span><span></span></span>   I agree to the  <a href="#" class="term-service">Terms and Conditions</a></label>
        </div>
        <button type="button" class="btn btn-primary btn-sm"  onClick={sendguidanceApplyData}>Register</button>
    </form>
</div>
    </center>
   
    </div>

  );
}

export default ApplyGuidance;