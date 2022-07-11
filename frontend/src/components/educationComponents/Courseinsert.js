import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import swal from 'sweetalert';



function Courseinsert() {
    const [listOfCourses, setListOfCourses] = useState([]);
    const [course_id, setcrsid] = useState("");
   const [course_name, setcrsName] = useState("");
  const [ course_category, setcategory] = useState("");
  const [course_thumbnail, setthumbnail] = useState("");
  const [course_description, setdescription] = useState("");
  const [ course_provideemail, setcourse_provideemail] = useState("");
  const [course_institute, setinstitute] = useState("");
  const [lessons, setlessons] = useState("");
  const [video_source, setsource] = useState("");
  const [video_link, setlink] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate());
    sub();
    setIsSubmit(true);
    
  };

  const validate=()=>{
    const errors = {};
    const emailModel = /\S+@\S+\.\S+/;
    if(!course_name){
        errors.course_name = "Coursename is required!";
       
    }
    if(!course_category){
        errors.course_category = "Course Category is required!";
    }
    if(!course_provideemail){
        errors.course_provideemail = "Email is required!";
    }else
    if(!emailModel.test(course_provideemail)){
        errors.course_provideemail = "Please Enter valid email";
    }

    if(!course_institute){
        errors.course_institute = "Course institute is required!";
    }
    if(!course_description){
        errors.course_description = "Course description is required!";
    } if(!video_link){
        errors.video_link = "Course link is required!";
    }
    if(!video_source){
        errors.video_source= "Course source is required!";
    }
    return errors;
  }
const sub =() => {
   
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      createCourse();
     
    }
}

  
  
  
  const createCourse = () => {
    Axios.post("http://localhost:8000/api/course/", {
        course_id,
        course_name,
        course_category,
        course_thumbnail,
        course_description,
        course_provideemail,
        course_institute,
        lessons,
        video_source,
        video_link,
    }).then((response) => {
        setListOfCourses([
        ...listOfCourses,
        {    course_id,
            course_name,
            course_category,
            course_thumbnail,
            course_description,
            course_provideemail,
            course_institute,
            lessons,
            video_source,
            video_link,
        },
      ]);
    });
    swal({
        title: "Course Added Successfuly!",
        icon: "success",
        confirmButtonText: "OK",
          }).then(function () {
              // Redirect the user
              window.location.href = "/courseadmin";
            });
       
 

  };
  const demo = () => {
    setcrsid("P124");
    setcrsName("Agrigenomics Solutions for Plants")
    setcategory("Plant Science");
    setthumbnail("https://images.pexels.com/photos/3912947/pexels-photo-3912947.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    setdescription("The discovery of novel single nucleotide polymorphisms (SNPs) is critical for plant  useful for accelerating  plant breeding and production goals. ");
    setcourse_provideemail("baurs@gmail.com");
    setinstitute("Baurs Lanka");
    setlessons("The discovery of novel single nucleotide polymorphisms (SNPs) is critical for plant genotyping in that it helps to provide candidate markers for marker-assisted selection programs in key crops. Genomic approaches are useful for accelerating variety development and crop improvement. Genomic tools can assist in the detection of QTLs, favorable and deleterious traits and identification of favorable alleles. Thermo Fisher Scientific offers a range of genomic tools and resources to help facilitate your plant breeding and production goals.")
    setsource("Youtube");
    setlink("https://www.youtube.com/embed/8-G7D_sy7qE");
  };




   

    return (
      
        <div >
            <body class="insert-body">
            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <button
              type="button"
             onClick={demo}
              class="btn store-order-form-button my-4"
              id="product-details-buy-now" style={{backgroundColor:"red", width:"80px"}}
            >
              Demo
            </button>
                        <div class="card" id="insert-crd">
                            <div class="insert-header">
                                <h5 class="text-center mb-4">Add New Course</h5>
                            </div>
                            <div class="padding-bot"> </div>
                            <form class="form-card">
                                <div class="row justify-content-between text-left">

                                    <div class="form-group col-sm-6 flex-column d-flex">
                                    <label class="form-control-label px-3">Course ID<span class="text-danger"> *</span></label>  <p><input placeholder="Course Id" value={course_id} id="i-bold" onChange={(event) => {setcrsid(event.target.value);}} class="form-control border-2" oninput="this.className = ''" /></p>

                                        <label class="form-control-label px-3">Course Name<span class="text-danger"> *</span></label>  <p><input placeholder="Course Name" value={course_name} id="i-bold" onChange={(event) => {setcrsName(event.target.value);}} class="form-control border-2" oninput="this.className = ''"  /></p>
                                        <p class="alert-txt">{formErrors.course_name}</p></div>
                                    <div class="form-group col-sm-6 flex-column d-flex">
                                        <label class="form-control-label px-3">Course Category<span class="text-danger"> *</span></label>
                                        <p><select id="select-bar" value={course_category} class="form-select border-2" placeholder="Course Category" onChange={(event) => {setcategory(event.target.value);}} aria-label="Default select example">
                                            <option selected >Select Category</option>
                                            <option value="Anima Health">Animal Health</option>
                                            <option value="Crop Science">Crop Science</option>
                                            <option value="Plant Science">Plant Science</option>
                                            <option value="Field Engniering">Field Engineering</option>
                                        </select>
                                        <p class="alert-txt">{formErrors.course_category}</p>
                                        </p>
                                       
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Course Thumbnail<span class="text-danger"> *</span></label> <input type="text" value={course_thumbnail} id="i-bold"  onChange={(event) => {setthumbnail(event.target.value);}}name="mob" placeholder="Course Thumbnail" onblur="validate(4)" /><p class="alert-txt">{formErrors.course_thumbnail}</p> </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Provide Institute<span class="text-danger"> *</span></label> <input type="text" id="i-bold"  onChange={(event) => {setinstitute(event.target.value);}}name="mob" placeholder="Provide Institute" onblur="validate(4)" /><p>{formErrors.course_institute}</p> </div>
                                </div>
                               
                                    
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Institute Email<span class="text-danger"> *</span></label> <input type="text" value={course_provideemail} id="i-bold" onChange={(event) => {setcourse_provideemail(event.target.value);}} name="job" placeholder="Institute Email" onblur="validate(5)" />
                                    <p class="alert-txt">{formErrors.course_provideemail}</p>
                                    </div>
                                
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Course Description<span class="text-danger"> *</span></label> <p>
                                        <div class="form-group">
                                            <textarea class="form-control" value={course_description} onChange={(event) => {setdescription(event.target.value);}} id="exampleFormControlTextarea3" rows="3" placeholder="Course Description"></textarea>
                                        </div>
                                    </p> <p class="alert-txt">{formErrors.course_description}</p></div>
                                </div>

                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Other Texts<span class="text-danger"> *</span></label> <p>
                                        <div class="form-group">
                                            <textarea class="form-control" value={lessons} onChange={(event) => {setlessons(event.target.value);}} id="exampleFormControlTextarea3" rows="3" placeholder="Course Description"></textarea>
                                        </div>
                                    </p></div>
                                </div>



                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-5 flex-column d-flex"> <label class="form-control-label px-3">Course Source<span class="text-danger"> *</span></label> <p><select class="form-select border-2" value={video_source} id="select-bar" onChange={(event) => {setsource(event.target.value);}} aria-label="Default select example">
                                        <option selected  >Select Source</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="External Url ">External Url </option>
                                        <option value="Html5(mp4)">Html5(mp4)</option>

                                    </select>
                                    <p class="alert-txt">{formErrors.video_source}</p>
                                    </p>
                                
                                    </div>
                                </div>

                                <div class="row justify-content-between text-left" id="link-input">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Source Link<span class="text-danger"> *</span></label> <input type="text" value={video_link}  onChange={(event) => {setlink(event.target.value);}} id="i-bold" name="ans" placeholder="Source Link" onblur="validate(6)" /> </div>
                                    <p class="alert-txt">{formErrors.video_link}</p>
                                </div>

                                <div class="row justify-content-end" id="add-btn">
                                    <div class="form-group col-sm-4"><Link to="./Courseadmin"> <button type="submit"  onClick= {handleSubmit}class="btn-block btn-primary">Add Course</button></Link> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
</body>

        </div>


    );
}

export default Courseinsert;