import React ,{Component} from 'react';
import axios from 'axios';
import{Carousel} from'react-bootstrap'
import Fade from 'react-reveal/Fade';
import { Card } from 'react-bootstrap';
import './labStyles.css';
import Swal from 'sweetalert2';

import img1 from './labImage/farm4.jpg'
import img2 from './labImage/farm5.jpg'
import img3 from './labImage/farm6.jpg'

export default class UserAllReports extends Component {

constructor(props){
    super(props);
    this.state={
        reports:[]
    };
}

componentDidMount(){
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  Toast.fire({
    title: 'Wellcome to lab Report page'
  })
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

 

filterData(reports,searchKey){
    const result = reports && reports.filter((report) =>{ 
    return report.cName.includes(searchKey)
    })

    this.setState({reports:result})
}


handleSearchArea = (e) =>{
   const searchKey = e.target.value ;
   axios.get('http://localhost:8000/api/lab/all').then(res =>{
    if(res.data.success){
    this.filterData(res.data.reports,searchKey)
    }       
});

}


    render(){
        return(


          
        <div className='labUserBack'>
          
 
 <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-50 w-100"
      src={img1}
      alt="First slide"
    />

    
    <Carousel.Caption>
      <div alignContent='center'>
      <h5 style={{color:'white'}}>We Provide Reports for Vegitables</h5>
      <p style={{color:'white'}}>vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.</p>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />
    <Carousel.Caption>
    <h5 style={{color:'white'}}>We Provide Reports for Vegitables</h5>
      <p style={{color:'white'}}>vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />
    <Carousel.Caption>
    <h5 style={{color:'white'}}>We Provide Reports for Vegitables</h5>
      <p style={{color:'white'}}>vegetable, in the broadest sense, any kind of plant life or plant product, namely “vegetable matter”; in common, narrow usage, the term vegetable usually refers to the fresh edible portions of certain herbaceous plants—roots, stems, leaves, flowers, fruit, or seeds.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 mt-2 mb-2 '>
                        <i className="fa-solid fa-magnifying-glass"/>
                            <input alignContent='left'
                            className='form-control'
                            type='search'
                            placeholder='Search By Company Name'
                            name='searchQuery'
                            onChange={this.handleSearchArea}>              
                            </input>
                        </div>
                    </div>

                  
                        {this.state.reports.map((reports,index)=>(
                             <>
                           <div  key={index} >
                           <Fade left>
                           <Card className="text-center" style={{border:'5px solid green' ,borderRadius:'15px',width:'100%'}}> 
                                  <Card.Header style={{color:'white',backgroundColor:'#19803b' ,fontSize:'27px',fontFamily:"cursive",borderRadius:"15px",border:'4px solid white',textDecorationLine:'underline'}}>{reports.cName}</Card.Header>
                                  <Card.Body style={{color:'Black' ,fontSize:'22px',borderRadius:"15px" ,backgroundImage:'img4',border:'5px solid green'}}  >
                                    
                                    <Card.Title>{reports.cEmail}</Card.Title>
                                    <Card.Text>
                                    
                                    {reports.about}
                                    </Card.Text>
                                    <br></br>
                                    <a href={`/URepDet/${reports._id}`} className="fa-solid fa-arrow-up-right-from-square fa-fade" style ={{textDecoration:'none',color:"green"}}>&nbsp;View Report </a>
                                  </Card.Body>
                                  
                                </Card>
                                    </Fade>
                                    </div>
                                    &nbsp;   
                            </> 
                    )
                    )   }
                    </div>  
                    </div>
        )
    }
}

 
