import React from 'react';
import { Link } from "react-router-dom";
import img1 from './eduimgs/slide1.jpg'
import img2 from './eduimgs/slide6.jpg'
import img3 from './eduimgs/slide2.jpg'
import plant from'./eduimgs//plants.jpg'
import animal from'./eduimgs/animals.jpg'
import seed from'./eduimgs/seed.jpg'
import agrieng from'./eduimgs/filedeng.jpg'
import img4 from'./eduimgs/slide5.jpg'
import Axios from "axios";
import { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Coursehome() {

  const [listOfUsers, setListOfUsers] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:8000/api/course/all").then((response) => {
      setListOfUsers(response.data);
    });
  }, [])

  let settings={
    dots: true,
      infinite: true,
      speed: 2700,
      slidesToShow: 1,
      slidesToScroll: 1
  }


  return (
    <div>
      <body class="crshome-bdy">
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="imgblock" alt="..." />
            <div class="carousel-text">
              <h2>Explore universities and institutions in Sri Lanka for various academic disciplines.</h2>

            </div>
          </div>
          <div class="carousel-item">
            <img src={img2} class="imgblock" alt="..." />
            <div class="carousel-text">
              <h2>An educational institution is a place where people of different ages gain an education</h2>

            </div>
          </div>
          <div class="carousel-item">
            <img src={img3} class="imgblock" alt="..." />
            <div class="carousel-text">
              <h2>The SLIATE is a statutory body operating under the purview of the Ministry of Higher Education</h2>

            </div>
          </div>
          <div class="carousel-item">
            <img src={img4} class="imgblock" alt="..." />
            <div class="carousel-text">
              <h2>An educational institution is a place where people of different ages gain an education</h2>

            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="top-heading">
        <h1>Top Course Programs</h1>
      </div>
    <div style={{marginBottom:"50px"}}></div>
      <div>
      <Carousel breakPoints={breakPoints}>
          {listOfUsers && listOfUsers.map((courses,i) => {
            return (
             
            <div class="card" id="topcrs-crd">
              <img src={courses.course_thumbnail} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h3 class="card-title">{courses.course_name}</h3>
                <p class="card-text">{courses.course_description}</p>
                <h2 class="course-price">{courses.course_institute}</h2>
                <span class="crsaction_btn">
                <Link to={`/coursecontent/${courses._id}`} >Start Today</Link>
            </span>
               
              </div>

            <div>
 







            </div>

            </div>
          
        
           
            );
          
          })}
      </Carousel>
   </div>
       
        <div class="course-cat">
          <h1>Top Categories</h1>
        </div>
      <div>
        <Carousel breakPoints={breakPoints}>
      
        <div class="card" id="topcrs-crd">
        <Link to={"/ccategory/Field Engniering"} >
    <a class="card-block stretched-link text-decoration-none" href="/">
              
              <div class="card-body">
              <img src={agrieng} class="crd-img"  alt="..."/>
              <div class="category-text">
              <h2>Field Engineering</h2>

            </div>
              </div>
              </a>
              </Link>
            </div>
            <div class="card"  id="topcrs-crd">
            <Link to={"/ccategory/Crop Science"} >
    <a class="card-block stretched-link text-decoration-none" href="/">
              
              <div class="card-body">
              <img src={seed} class="crd-img"  alt="..."/>
              <div class="category-text">
              <h2>Crop Science</h2>

            </div>
              </div>
              </a>
              </Link>
            </div>
            <div class="card"  id="topcrs-crd">
            <Link to={"/ccategory/Animal Health"} >
    <a class="card-block stretched-link text-decoration-none" href="/">
              
              <div class="card-body">
              <img src={animal} class="crd-img"  alt="..."/>
              <div class="category-text">
              <h2>Animal Health</h2>

            </div>
              </div>
              </a>
              </Link>
            </div>
            <div class="card"  id="topcrs-crd">
            <Link to={"/ccategory/Plant Science"} >
    <a class="card-block stretched-link text-decoration-none" >
              
              <div class="card-body">
            
              <img src={plant} class="crd-img" alt="..."/>
            
              <div class="category-text">
              <h2>Plant Science</h2>

            </div>
              </div>
              </a>
              </Link>
            </div>
          <div class="space-nav">

          </div>


        </Carousel>

        </div>
        <div class="space-jumbo">


<div class="crs-jumbotron" >

  <h1 class="display-4">Learn From Anywhere</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4"/>
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
    
  </p>
</div>

</div>
<div class="crsjumbotron-bottom">

</div>
</body>

      </div>







  )
}
export default Coursehome;
