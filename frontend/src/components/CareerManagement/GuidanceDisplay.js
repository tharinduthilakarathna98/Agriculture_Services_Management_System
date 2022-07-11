import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

function GuidanceDisplay(){
	const [articles, setArticles] = useState([]);
	const [GuidanceSearch , setcrsSearch] = useState("");

	useEffect(() => {

		axios.get("http://localhost:8000/api/AddGuidances/all").then(res => {
			setArticles(res.data);
			console.log(res.data);
		})
		
		}, [])

    return(
		<body className="bodys">
            <div>
	<div class="container py-2 vacancycontainer">
		<div class="h1 text-center text-dark" id="pageHeaderTitle">Career Guidance Programs</div>

		<div className="input-group" style={{ width: "30rem",  }}>
                       <div class="srchs"> <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Search Programs" aria-label="Search" aria-describedby="search-addon" />
					   <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button>
                </div>
         </div>
       
		{articles && articles.filter(value=>{
            if(GuidanceSearch ===""){
                return value;
            }else if(
                value.programName.toLowerCase().includes(GuidanceSearch.toLowerCase())
            ){
                return value
            }
        }).map((article, i) => (

        <article key={i} class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={article.programImage} alt="Image Title" />
			</a>
	
  		<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">{article.programName}</a></h1>
				<div class="postcard__subtitle small">
						<i class="fas fa-calendar-alt mr-2"></i> {article.publishedDate}
			</div>
	
  	<div class="postcard__bar"></div>
		<div class="postcard__preview-txt">{article.programDescription}</div>
           <button type="button" class="btn btn-primary btn-sm"><Link to={`/ApplyGuidance/`} > Register to Program </Link></button>
	</div>
</article>
))}
	</div>
 </div>
		</body>
       
    );
    }
export default GuidanceDisplay;