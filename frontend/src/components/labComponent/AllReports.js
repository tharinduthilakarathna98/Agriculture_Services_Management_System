import React ,{Component} from 'react';
import axios from 'axios';
import Pulse from 'react-reveal/Pulse';
import './labStyles.css';
import Swal from 'sweetalert2'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default class AllRepports extends Component {

constructor(props){
    super(props);
    this.state={
        reports:[]
    };
}

componentDidMount(){
    this.retrieveReports();
} 

//method
retrieveReports(){
  axios.get('http://localhost:8000/api/lab/all').then(res =>{
      if(res.data.success){
          this.setState({
            reports:res.data.reports
          });
      }
console.log(this.state.reports);
  });
}

 onDelete = (id) =>{
    axios.delete(`http://localhost:8000/api/lab/delete/${id}`).then((res) => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'warning',
            title: 'Lab Report Deleted'
          })
        this.retrieveReports();
    })
}

filterData(reports,searchKey){
    const result = reports && reports.filter((report) =>{ 
    return report.cName.includes(searchKey)
    })

    this.setState({reports:result})
}

handleSearchArea = (e) =>{
   const searchKey = e.target.value ;
   axios.get('http://localhost:8000/api/lab/all').then((res) =>{
    if(res.data.success){
    this.filterData(res.data.reports,searchKey)
    }       
});

}



 printPdf = () => {
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



    render(){
        return(
            <div className='backgroundAllLab'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9 mt-2 mb-2'>
                            <h4 style={{color:'white'}}>All Reports</h4>
                        </div>
                        <div className='col-lg-3 mt-2 mb-2'>
                            <input 
                            className='form-control'
                            type='search'
                            placeholder='Search'
                            name='searchQuery'
                            onChange={this.handleSearchArea}>                      
                            </input>
                        </div>
  
                  </div>
                  <Pulse>
             <div className='Lab-div2'>
                 <table id ='Lab-All-Tables' className ="striped bordered hover pdfdiv" style={{marginTop:'40px'}}>
                     <thead>
                         <tr className='allLabRepHead'>
                           <th scope ="col" className='allReports1'>#</th>  
                           <th scope ="col" className='allReports1'>Company Name</th>  
                           <th scope ="col" className='allReports1'>Company Email</th>  
                           <th scope ="col" className='allReports1'>Report About</th>  
                           <th scope ="col" className='allReports1'>Lab ID</th>  
                           <th scope ="col" className='allReports1'>Report Status</th>
                           <th scope ="col" className='allReports1'>Action</th>    
                         </tr>
                     </thead>
                     <tbody>
                         {this.state.reports &&
                         this.state.reports.map((reports,index)=>(
                            <tr key={index}>
                                <th scope ="row" className='allReports'>{index+1}</th>
                                <td>
                                     <a href={`/rep/${reports._id}`} style ={{textDecoration:'none',color:'#006622' ,fontSize:'18px'}} >
                                    {reports.cName}
                                    </a>
                                </td>
                                <td className='allReportsLab'>{reports.cEmail}</td> 
                                <td className='allReportsLab'>{reports.about}</td>
                                <td className='allReportsLab'>{reports.labId}</td>
                                <td className='allReportsLab'>{reports.reportStatus}</td>
                                <td>
                                    <a className ="btn btn-warning" href={`/edit/${reports._id}`}>
                                        <i className="fas fa-edit"></i>&nbsp;EDIT
                                    </a>
                                    <br></br>
                                    &nbsp; 
                                    <a className ="btn btn-danger" href="#" onClick={() => this.onDelete(reports._id)}>
                                        <i className="far fa-trash-alt"></i>&nbsp;DELETE
                                    </a>
                                </td>
                            </tr> 
                         ))}
                     </tbody>
                 </table>

                 </div>
                 </Pulse>
                 <br></br>
                 <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Post</a></button>
                 <button className="btn btn-success"><a onClick={this.printPdf} style={{textDecoration:'none',color:'white'}}>Download Post</a></button>
            </div>
            </div>  
        )
    }
}

 
