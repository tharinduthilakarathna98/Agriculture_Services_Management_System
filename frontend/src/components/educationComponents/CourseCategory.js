import React from "react";
import { Link,useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import Axios from "axios";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CourseCategory(){
    const {cat} = useParams();
    const [CourseSearch , setcrsSearch] = useState("");
    const [listOfCourses, setlistOfCourses] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:8000/api/course/cat/${cat}`).then((response) => {
        setlistOfCourses(response.data);
      });
    }, [])
  



    return(
<div>
 
<div style={{paddingTop:"30px"}}> <center><h1>{cat} Course Programs</h1></center> </div>
<center><div className="input-group" style={{ width: "30rem",paddingBottom:"20px" }}>
  <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Course Name" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button>
</div>
</center>
      {listOfCourses&& listOfCourses.filter(value=>{
        if(CourseSearch ===""){
            return value;
        }else if(
            value.course_name.toLowerCase().includes(CourseSearch.toLowerCase())
        ){
            return value
        }
    }).map((courses, i) => (
       
    
      <div>
      
      <div class="blog-post">
          <div class="blog-post_img">
              <img src={courses.course_thumbnail}
                  alt=""/>
          </div>
          <div class="blog-post_info">
              <div class="blog-post_date">
                
                  <span>{courses.course_name}</span>
              </div>
              <h1 class="blog-post_title">Provided By {courses.course_institute}</h1>
              <div class="st-btn">
              <span class="crsaction_btn">
                <Link to={`/coursecontent/${courses._id}`} >Start Today</Link>
            </span>
            </div>
              <p class="blog-post_text">
                  {courses.course_description}
              </p>
              
          </div>
      </div>
    

      </div>
          

           ))}
             <div style={{paddingBottom:"200px"}}>

</div>
           </div>
            );
          
   
 

    
}

export default CourseCategory;