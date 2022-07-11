import React, {Component} from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import './labStyles.css';
import vid2 from './labVideo/LabVideo2.mp4'
import Slide from 'react-reveal/Slide';
import Swal from 'sweetalert2';

function withParams(Component) {
    return (props) => <Component {...props} params={useParams()} />;
  }

class EditReport extends Component{


    constructor(props){
        super(props);
        this.state={
            cName:"",
            cEmail:"",
            about:"",
            labId:"",
            reportStatus:""

        }
   }
  
   handleInputChange = (e) =>{
       const {name,value} = e.target;

       this.setState({
        ...this.state,
        [name]:value
       })
   }

   onSubmit = (e) =>{
       e.preventDefault();
       const id = this.props.params.id;

       const{cName,cEmail,about,labId,reportStatus} = this.state;

       const data ={
           cName:cName,
           cEmail:cEmail,
           about:about,
           labId:labId,
           reportStatus:reportStatus
       }

       console.log(data)


       axios.put(`http://localhost:8000/api/lab/update/${id}`,data).then((res) => {
           if(res.data.success){
               //alert("Post Edited Successfully")
               this.setState(
                   {
                    cName:"",
                    cEmail:"",
                    about:"",
                    labId:"",
                    reportStatus:""
                   });
           }
       });
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
        icon: 'success',
        title: 'Lab Report Edited Successfully'
      })

   };


        componentDidMount() {
            const id = this.props.params.id;

            axios.get(`http://localhost:8000/api/lab/oneR/${id}`).then((res) => {
            if (res.data.success) {
                this.setState({
                    cName:res.data.report.cName,
                    cEmail:res.data.report.cEmail,
                    about:res.data.report.about,
                    labId:res.data.report.labId,
                    reportStatus:res.data.report.reportStatus,
                });
            }
            });
        }


        render(){
            return(
 
                <div className='col-md-8 mt-4 mx-auto'>

                <video autoPlay loop muted className="video2"> 
                  <source src={vid2} type="video/mp4"/>
                  </video>
                  <Slide right>
                   <div className='Lab-div1'>
                 
                    <h1 className='h2 mb-2 font-weight-normal' style={{color:'white',borderTopRightRadius:'20px',borderTopLeftRadius:'20px',backgroundColor:"green",textAlign:'center',padding:'10px',textDecorationLine:'underline'}}>Edit Lab Report Here!</h1>
                    <from className='need-validation' nonValidate>
                    
                        <div className='form-group' style={{marginBottom:'50px',marginTop:'50px'}}>
                            <label className='RepLeble' style={{marginBottom:'-10px'}} >Company Name :-</label>
                            <input type="text"
                            className='RepBox2'
                            name='cName'
                            placeholder=' '
                            value={this.state.cName}
                            onChange={this.handleInputChange}></input>
                        </div>

                        <div className='form-group' style={{marginBottom:'50px',marginTop:'50px'}}>
                            <label className='RepLeble' style={{marginBottom:'-10px'}}>Company Email:-</label>
                            <input type="email"
                             className='RepBox2'
                            name='cEmail'
                            placeholder=' '
                            value={this.state.cEmail}
                            onChange={this.handleInputChange}></input>
                        </div>

                        <div className='form-group' style={{marginBottom:'50px',marginTop:'50px'}}>
                            <label className='RepLeble' style={{marginBottom:'-10px'}}>Lab Report About :-</label>
                            <textarea type="text"
                            className='RepBox2'
                            name='about'
                            rows='4'
                            value={this.state.about}
                            onChange={this.handleInputChange}></textarea>
                        </div>

                        <div className='form-group' style={{marginBottom:'50px',marginTop:'50px'}}>
                            <label className='RepLeble' style={{marginBottom:'-10px'}}>Lab ID :-</label>
                            <input type="text"
                             className='RepBox2'
                            name='labId'
                            placeholder=' '
                            value={this.state.labId}
                            onChange={this.handleInputChange}></input>
                        </div>

                        <div className='form-group' style={{marginBottom:'50px',marginTop:'50px'}}>
                            <label className='RepLeble' style={{marginBottom:'-10px'}}>Lab Report Status :-</label>
                            <input type="text"
                            className='RepBox2'
                            backgroundColor='non'
                            name='reportStatus'
                            placeholder=' '
                            value={this.state.reportStatus}
                            onChange={this.handleInputChange}></input>
                        </div>
                <button className='btn btn-success' type="Submit" style={{marginTop:'15px'}} onClick={this.onSubmit} >
                <i className='far fa-check-square'></i>
                &nbsp;UPDATE 
                </button>
                    </from>
                    
                    </div> 
               </Slide>

                </div>
              
            )
        }
}
export default withParams(EditReport);