import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";





function Course_report(){

    const [listOfCourses, setlistOfCourses] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/course/all").then((response) => {
            setlistOfCourses(response.data);
        });
      }, []);


      const printPdf = () => {
        const input = document.querySelector(".pdfdiv");
        html2canvas(input).then((canvas) => {
          var img = new Image();
          const doc = new jsPDF("p", "mm", "a4");
          doc.setTextColor(255, 0, 0);
          doc.setFontSize(28);
          doc.setTextColor(0, 0, 255);
          doc.setFontSize(16);
          doc.text(10, 70, "Agrotec LLC");
          doc.setTextColor(0, 255, 0);
          doc.setFontSize(12);
          doc.text(145, 85, "Signature :");
          //Date
          var m_names = new Array(
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          );
    
          var today = new Date();
          var seconds = today.getSeconds();
          var minutes = today.getMinutes();
          var hours = today.getHours();
          var curr_date = today.getDate();
          var curr_month = today.getMonth();
          var curr_year = today.getFullYear();
    
          today =
            m_names[curr_month] +
            " " +
            curr_date +
            "/ " +
            curr_year +
            " | " +
            hours +
            "h : " +
            minutes +
            "min : " +
            seconds +
            "sec";
          var newdat = today;
          doc.setTextColor(0, 0, 0);
          doc.setFontSize(11);
          doc.text(130, 93, newdat);
          var imgHeight = (canvas.height * 200) / canvas.width;
          const imgData = canvas.toDataURL("image/png");
          doc.addImage(imgData, "JPEG", 5, 100, 200, imgHeight);
          const date = Date().split(" ");
          // we use a date string to generate our filename.
          const dateStr =
            "Agrotec Reports" + date[0] + date[1] + date[2] + date[3] + date[4];
          doc.save(`report_${dateStr}.pdf`);
        });
      };


return(

    <div>
         <center>
             <div style={{marginTop:"50px"}}><h1>Course Programs Report</h1></div></center>
             <button type="button" class="re-btn" style={{marginLeft:"1200px"}}  onClick={printPdf} >
  <span class="button__text">Print</span>
  <span class="button__icon">
  <i class="fa fa-print"></i>
  </span>
</button>


         <div style={{marginTop:"80px"}}></div>
         
         <center>
             
         <table id="c-repo" class="table table-bordered pdfdiv"  >
      <thead class="crs-thead" style={{backgroundColor:"black"}}>
        <tr>
          <th class="crs-th" >Course Id</th>

          <th class="crs-th">Course Name</th>
          <th class="crs-th">Category</th>
          <th class="crs-th">Course Source</th>
          <th class="crs-th">Institute</th>
          <th class="crs-th">Institute Email</th>
        </tr>
      </thead>
      <tbody>
          
      {listOfCourses.map((courses) => {
           return(
        <tr class="crs-tr" data-status="active">
        
          <td className="crs-td"style={{padding:"15px"}}>{courses.course_id}</td>
          <td className="crs-td"style={{padding:"15px"}}>{courses.course_name}</td>
          <td className="crs-td"style={{padding:"15px"}}>{courses.course_category}</td>
          <td className="crs-td"style={{padding:"15px"}}>{courses.video_source}</td>
          <td className="crs-td"style={{padding:"15px"}}>{courses.course_institute}</td>
          <td className="crs-td"style={{padding:"15px"}}>{courses.course_provideemail}</td>

          </tr>
          );
          })}
          </tbody>
    </table>
    </center>
         
         

         
         <div style={{marginBottom:"150px"}}></div>
         
         </div>
);


}

export default Course_report;