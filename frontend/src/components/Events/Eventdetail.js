import React from 'react'
import './eventdetail.css';
import green from "./eventimages/green.jpg";

const Eventdetail = () => {
    return(
<>
<div class="detailbackgroundfont">
<div class="wrapper">
			<div class="image-holder">
            <img  src={green} alt=""></img>
			</div>
            <div class="form-content">
            	<form action="#"/>
            		<div id="wizard">
                        </div>
	            		</div>
		                <h4></h4>
		                <section>
	                		<h3>Event Information</h3>
							<div class="info1">
								<div class="info-item1">
									<span class="lnr lnr-calendar-full"></span>
									<span class="unit">Date:</span>
								    August 1 @ 8:00 am
								</div>
								<div class="info-item1">
									<span class="lnr lnr-clock"></span>
									<span class="unit">Time:</span>
								    8:00 am - 5:00 pm
								</div>
								<div class="info-item1">
									<span class="lnr lnr-apartment"></span>
									<span class="unit">Venue:</span>
								    National Conference
								</div>
								<div class="info-item1">
									<span class="lnr lnr-map"></span>
									<span class="unit">Address:</span>
								    No 40 Baria Sreet 133/2
								</div>
								<div class="info-item1">
									<span class="lnr lnr-earth"></span>
									<span class="unit">Website: </span>
								    Info@yourwev.com
								</div>
							</div>
                            
                            
		                </section>
                        
                        
	            	</div>
            

                    </div>


</>


    );
}

export default Eventdetail