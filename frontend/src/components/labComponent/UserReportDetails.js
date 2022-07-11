import React, { Component } from "react";
import axios from "axios";
import './labStyles.css'
import { useParams } from "react-router";
import { Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col} from "react-bootstrap";
import { Button } from "react-bootstrap";
import Flip from 'react-reveal/Flip';


import vid1 from './labVideo/LabVideo1.mp4'
import imglogo from './labImage/LabLogo4.jpg'

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class ReportDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: {},
    };
  }

  componentDidMount() {
    const id = this.props.params.id;

    axios.get(`http://localhost:8000/api/lab/oneR/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          report:res.data.report,
        });
      }
    });
  }

  render() {
    return (
       <div>
         
        {this.state.report && (
          <>
                  <div className='col-md-7 mt-4 mx-auto' >
                  <video autoPlay loop muted className="video1"> 
                  <source src={vid1} type="video/mp4"/>
                  </video>
                  <Flip top>
                <Form>
                 <div className='text-wrapper'>
                    <h1 className='h3 mb-3 font-weight-normal ' style={{color:'white',fontFamily:'AvenirNextCondensed-Italic',fontWeight:'bolder' ,textDecorationLine:'underline'}}>Lab report Details</h1>
                 <div > 
                 <img  
                   
                    width={842}
                    height={300}
                    src={imglogo}
                    alt='company logo'
                    
                />
                </div>
                <br></br>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label style={{color:'white' , fontFamily:'Georgia, serif',fontSize:'20px'}}>Company Name</Form.Label>
                      <Form.Control  style={{color:'green' ,fontSize:'19px' ,fontFamily:'Georgia, serif'}} value={this.state.report.cName}    readonly/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label style={{color:'white', fontFamily:'Georgia, serif',fontSize:'20px'}}>Company Email</Form.Label>
                      <Form.Control   style={{color:'green' ,fontSize:'19px' ,fontFamily:'Georgia, serif'}} value={this.state.report.cEmail}   readonly />
                    </Form.Group>
                  </Row>
                  <br></br>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label style={{color:'white', fontFamily:'Georgia, serif',fontSize:'20px'}}>Lab Report About</Form.Label>
                    <Form.Control   style={{color:'green' ,fontSize:'19px' ,fontFamily:'Georgia, serif'}}  as="textarea" rows="3" value={this.state.report.about}   readonly />
                  </Form.Group>
                  <br></br>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label style={{color:'white', fontFamily:'Georgia, serif',fontSize:'20px'}}>Lab ID</Form.Label>
                      <Form.Control  style={{color:'green' ,fontSize:'19px' ,fontFamily:'Georgia, serif'}} value={this.state.report.labId}   readonly/>
                    </Form.Group>
                    <br></br>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label style={{color:'white',fontFamily:'Georgia, serif',fontSize:'20px'}}>Lab Report Status</Form.Label>
                      <Form.Control style={{color:'green' ,fontSize:'19px' ,fontFamily:'Georgia, serif'}} value={this.state.report.reportStatus}   readonly/>
                    </Form.Group>
                  </Row>
<br></br>
                  <Button variant="success" type="submit"><a href="/Ulabs" style={{color:'White' , backgroundColor:'green' , paddingLeft:'50px' , paddingRight:'50px' , fontSize:'15px' ,borderBlockColor:'white'}} >
                    Ok
                    </a>
                  </Button>
                  </div>
                </Form>
                </Flip>
            </div>
          </>     
        )}
       
   </div>
    );
  }
}

export default withParams(ReportDetails);
