import React, {useState,useEffect} from "react";
import MaterialTable from 'material-table';
import PrintIcon from '@material-ui/icons/Print'
import jsPDF from 'jspdf'
import 'jspdf-autotable'



import {getAllappointments} from './HealthCareServices'


export default function AllProducts(){

    const [appointments,setAppointments] = useState([]);
 

   useEffect(()=>{
    getAllappointments().then((data)=>{
        console.log("data>>", data.data.existingPosts)
        setAppointments(data.data.existingPosts)
    })
    
},[])



  const columns=[
    {title: "Name" , field:"CustomerName" , type:"string"},
    {title: "NIC" , field:"NIC" , type:"string"},
    {title: "Animal Type" , field:"AnimalType" , type:"string"},
    {title: "Contact" , field:"ContactNo" , type:"string"},
    {title: "Address" , field:"Address" , type:"string"},
    {title: "Date" , field:"Date" , type:"string"},
    {title: "Time" , field:"Time" , type:"string"},
    
]

  const downloadPdf = () => {
    const doc = new jsPDF()
    doc.text("Appointment Details", 30, 10)
    doc.autoTable({
      theme: "grid",
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body:appointments
    })
    doc.save('All appointment .pdf')
  }

  
   
    return(
        <div>
             
 <div className="containerPrint">

  <div class="container-fluid" style={{ marginBottom:"40px" ,marginTop:"60px" }} >
  <MaterialTable  style={{background:"#bdf2c9", marginBottom:"40px"}}
              title="All Appointment Details "
              columns={columns}
              data={appointments}
              actions={[
                    {
                      icon: () => <PrintIcon />,// you can pass icon too
                      tooltip: "Export to Pdf",
                      onClick: () => downloadPdf(),
                      isFreeAction: true
                    }
                  ]}
              options={{
                    sorting: false,
                    search: false,
                    paging : false,
                    filtering :false,
                    actionsColumnIndex: -1}}/>      
  </div>
  </div>
  </div>
        
    )    
    
}

