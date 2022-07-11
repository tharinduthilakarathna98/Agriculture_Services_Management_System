import React from "react";
import {Link} from "react-router-dom";

function CareerHome(){
    return (
        <div className="home">
<div class="dd_heading">
<div class="h1 text-center text-dark" id="pageHeaderTitle">Careers</div>
        
      </div>
      <main class="page-content">
        <div class="d_card">
          <div class="content">
            <h2 class="heading">Career Vacancies</h2>
            <p class="data-content">You can build your future Career with us. </p>
            <button  class="btn btn-secondary" data-toggle="modal"  > <Link to={`/VacancyDisplay/`} > Find Out More </Link>  </button>
          </div>
        </div>
        <div class="d_card">
          <div class="content">
            <h2 class="heading"> Career Guidance Programs</h2>
            <p class="data-content"> You can get more experiences by go through our Career Guidance Events </p>
            <button  class="btn btn-secondary" data-toggle="modal"  > <Link to={`/GuidanceDisplay/`} > Find Out More</Link>  </button>
          </div>
        </div>
        <div class="d_card">
          <div class="content">
            <h2 class="heading">Register as Candidate</h2>
            <p class="data-content"> You can register as a job Candidate. If we have a vacancy for you, then we will call for you. </p>
            <button  class="btn btn-secondary" data-toggle="modal"  > <Link to={`/CandidateRegister/`} > Register Now </Link>  </button>
          </div>
        </div>
        <div class="d_card">
          <div class="content">
            <h2 class="heading">Events</h2>
            <p class="data-content"> </p>
          </div>
        </div>
      </main>
        </div>
        
    );
}
export default CareerHome;