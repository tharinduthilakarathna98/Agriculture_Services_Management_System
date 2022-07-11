import React from "react";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import Axios from "axios";

    


function Courseadmin(){


    const [listOfCourses, setlistOfCourses] = useState([]);
    const [CourseSearch , setcrsSearch] = useState("");

    
    useEffect(() => {
      Axios.get("http://localhost:8000/api/course/all").then((response) => {
        setlistOfCourses(response.data);


      });
    }, [])

    const Delete = (id) => {
      alert("You want to delete Course")
        Axios.delete(`http://localhost:8000/api/course/${id}`).then((res) => {
          alert("Program Deleted Successfully!");
          
        });
        window.location.reload(false);

      };



    return(
        <div>
<div class="crstable_responsive">
<div class="crstable-title">
                <div class="crs-row">
                    <div class="col-sm-6" id="col"><h2><b>Manage   </b><b>Courses</b></h2></div>
                    <div className="input-group" style={{ width: "20rem",  }}>
  <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Course Name" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button>
</div>
<Link to={"/coursereport"} >
<button type="button" class="re-btn" style={{marginTop:"20px"}} >
  <span class="button__text">Report</span>
  <span class="button__icon">
  <i class="fa fa-file"></i>
  </span>
</button>
    </Link>            <div class="addbtn-row" >
                    <a href="/Courseinsert" id="add-crs" class="btn btn-success" data-toggle="modal"><i class="fa-solid fa-plus"></i> <span>Add New Course</span></a>
                    </div>
                </div>
            </div>
    <table class="crs-admin">
      <thead class="crs-thead">
        <tr>
          <th class="crs-th" >Course Id</th>
          <th class="crs-th">Thumbnail</th>
          <th class="crs-th">Course Name</th>
          <th class="crs-th">Category</th>
          <th class="crs-th">Institute</th>
          <th class="crs-th">Institute Email</th>

         
          <th class="crs-th">Action</th>
        </tr>
      </thead>
      <tbody>
      {listOfCourses && listOfCourses.filter(value=>{
            if(CourseSearch ===""){
                return value;
            }else if(
                value.course_name.toLowerCase().includes(CourseSearch.toLowerCase())
            ){
                return value
            }
        }).map((courses, i) => (
           
        <tr class="crs-tr" data-status="active">
        
          <td className="crs-td">{courses.course_id}</td>
          <td className="crs-td">< img src={courses.course_thumbnail} class="crsthumimg" alt=""/></td>
          <td className="crs-td">{courses.course_name}</td>
          <td className="crs-td">{courses.course_category}</td>
          <td className="crs-td">{courses.course_institute}</td>
          <td className="crs-td">{courses.course_provideemail}</td>
          <td className="crs-td">
            <span class="crsaction_btn">
            <Link to={`/updatecourse/${courses._id}`} > Update </Link> 
            <Link to="#" onClick={() => Delete(courses._id)}> Delete </Link> 
            </span>
          </td>
        </tr>
        
            ))}
      </tbody>
    </table>
   
    
  </div>
  <div class="padding-bot">

</div>
</div>
 
    );

    }

export default Courseadmin;