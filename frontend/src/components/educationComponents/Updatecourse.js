import React from 'react';
import { Link,useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";





function Updatecourse() {
    const {id} = useParams();
    const [course_id, setcrsid] = useState("");
   const [course_name, setcrsName] = useState("");
  const [ course_category, setcategory] = useState("");
  const [course_thumbnail, setthumbnail] = useState("");
  const [course_description, setdescription] = useState("");
  const [course_provideemail, setcourse_provideemail] = useState("");
  const [course_institute, setinstitute] = useState("");
  const [lessons, setlessons] = useState("");
  const [video_source, setsource] = useState("");
  const [video_link, setlink] = useState("");
 
  
  
  function sendCourse(e){
    e.preventDefault();
    alert("Going to Update Course");

    const newCourse = {
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
  
 }
 Axios.put(`http://localhost:8000/api/course/${id}`,newCourse).then(()=>{
   

  }).catch((err)=>{
    alert(err)
    console.log(err);
}
)
window.location.href = "/courseadmin";
  
 }







useEffect(() => {
  Axios.get(`http://localhost:8000/api/course/${id}`).then(res => {
    setcrsid(res.data.course_id);
    setcrsName(res.data.course_name);
    setcategory(res.data.course_category);
    setthumbnail(res.data.course_thumbnail);
      setcourse_provideemail(res.data.course_provideemail);
      setsource(res.data.video_source);
      setlink(res.data.video_link);
      setlessons(res.data.lessons);
      setdescription(res.data.course_description);
      setinstitute(res.data.course_institute);
      console.log(res.data);
      })		
  }, [])

    return (
      
        <div >
            <body class="insert-body">
            <div class="container-fluid px-1 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">

                        <div class="card" id="insert-crd">
                            <div class="insert-header">
                                <h5 class="text-center mb-4">Edit Course</h5>
                            </div>
                            <div class="padding-bot"> </div>
                            <form class="form-card">
                                <div class="row justify-content-between text-left">

                                    <div class="form-group col-sm-6 flex-column d-flex">
                                   
                                        <label class="form-control-label px-3">Course Name<span class="text-danger"> *</span></label>  <p><input value={course_name} id="i-bold" placeholder="Course Name"  onChange={(event) => {setcrsName(event.target.value);}} class="form-control border-2" oninput="this.className = ''" name="fname" /></p>
                                        </div>
                                    <div class="form-group col-sm-6 flex-column d-flex">
                                        <label class="form-control-label px-3">Course Category<span class="text-danger"> *</span></label>
                                        <p><select value={course_category} class="form-select border-2" id="i-bold" onChange={(event) => {setcategory(event.target.value);}} aria-label="Default select example">
                                            <option selected >Select Category</option>
                                            <option value="Animal Health">Animal Health</option>
                                            <option value="Crop Science">Crop Science</option>
                                            <option value="Plant Science">Plant Science</option>
                                            <option value="Field Engniering">Field Enginering</option>
                                        </select>
                                      
                                        </p>
                                       
                                    </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Course Thumbnail<span class="text-danger"> *</span></label> <input type="text"value={course_thumbnail} id="i-bold"  onChange={(event) => {setthumbnail(event.target.value);}}name="mob" placeholder="Course Thumbnail" onblur="validate(4)" /> </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Provide Institute<span class="text-danger"> *</span></label> <input value={course_institute} type="text" id="i-bold"  onChange={(event) => {setinstitute(event.target.value);}} /> </div>
                                </div>
                               
                                    
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Institute Email<span class="text-danger"> *</span></label> <input value={course_provideemail} type="text"  onChange={(event) => {setcourse_provideemail(event.target.value);}} id="i-bold" name="job" placeholder="" onblur="validate(5)" />
                                    
                                    </div>
                                
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Course Description<span class="text-danger"> *</span></label> <p>
                                        <div class="form-group">
                                            <textarea value={course_description} class="form-control"  onChange={(event) => {setdescription(event.target.value);}} id="exampleFormControlTextarea3" rows="3" placeholder="Course Description" ></textarea>
                                        </div>
                                    </p> </div>
                                </div>

                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Other Texts<span class="text-danger"> *</span></label> <p>
                                        <div class="form-group">
                                            <textarea value={lessons}  class="form-control"  onChange={(event) => {setlessons(event.target.value);}} id="exampleFormControlTextarea3" rows="3" placeholder="Course Description"></textarea>
                                        </div>
                                    </p></div>
                                </div>



                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Course Source<span class="text-danger"> *</span></label> <p><select  value={video_source} class="form-select border-2" id="i-bold"  onChange={(event) => {setsource(event.target.value);}} aria-label="Default select example">
                                        <option selected >Select Source</option>
                                        <option value="Youtube">Youtube</option>
                                        <option value="External Url ">External Url </option>
                                        <option value="Html5(mp4)">Html5(mp4)</option>

                                    </select>
                                    
                                    </p>
                                
                                    </div>
                                </div>

                                <div class="row justify-content-between text-left" id="link-input">
                                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Source Link<span class="text-danger"> *</span></label> <input  value={video_link} type="text" id="i-bold"  onChange={(event) => {setlink(event.target.value);}}   /> </div>
                                  
                                </div>

                                <div class="row justify-content-end" id="add-btn">
                                    <div class="form-group col-sm-4"><button type="submit" onClick= {sendCourse}class="btn-block btn-primary">Update Course</button> </div>
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

export default Updatecourse;