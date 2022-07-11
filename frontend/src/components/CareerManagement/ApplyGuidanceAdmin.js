import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ApplyGuidanceAdmin(){
    const [applyguidance, setApplyGuidance] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/Applyguidances/all/").then(res => {
           setApplyGuidance(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/Applyguidances/${id}`).then((res) => {
              alert("Applicant Deleted Successfully!");
            });
            window.location.reload(false);
          };

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
           <div class="h1 text-center text-dark" id="pageHeaderTitle">Guidance Program Applicants</div>
    <div class="card shodow mb-4">
        <div class="card-header py-3">
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered pdfdiv" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Program</th>
                            <th>Name with Initials</th>
                            <th>Full Name</th>
                            <th>NIC</th>
                            <th>Address</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>O/L</th>
                            <th>Delete</th>
                            <th>Call for Program</th>
                        </tr>
                    </thead>
                    <tbody>
                    {applyguidance && applyguidance.map((applyg, i) => (
                         <tr data-status="active">
                        <td>{applyg.program}</td>
                        <td>{applyg.name_with_in}</td>
                        <td>{applyg.nameinfull}</td>
                        <td>{applyg.nic_no}</td>
                        <td>{applyg.address_g}</td>
                        <td>{applyg.mobile_no}</td>
                        <td>{applyg.email_g}</td>
                        <td>{applyg.Ordinarylevel}</td>
                        
                        <td>
                        <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(applyg._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link> 
                        </td>
                        <td>
                        <button className="btn btn-warning"> <a href="mailto://mail.google.com/"> Send Mail </a></button> 
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button class="btn btn-secondary" onClick={printPdf}> Download Report </button>
            </div>
        </div>
    </div>
</div>  
       
        );
    }
export default ApplyGuidanceAdmin;