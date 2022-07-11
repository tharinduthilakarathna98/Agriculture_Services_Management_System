import react,{useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function VacancyDisplay(){
	const [articles, setArticles] = useState([]);
	const [VacancySearch , setcrsSearch] = useState("");
	
	useEffect(() => {
		axios.get("	http://localhost:8000/api/AddVacancies/all").then(res => {
			setArticles(res.data);
			console.log(res.data);
		})		
		}, [])

 return(
	 <body className="bodyz">
<div>
	<div class="container py-2 vacancycontainer" >
		<div class="h1 text-center text-dark" id="pageHeaderTitle">Career Vacancies</div>

		<div className="input-group" style={{ width: "30rem",  }}>
                       <div class="srchs"> <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Search Vacancy" aria-label="Search" aria-describedby="search-addon" />
					   <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button>
                </div>
         </div>

		{articles && articles.filter(value=>{
            if(VacancySearch ===""){
                return value;
            }else if(
                value.jobTitle.toLowerCase().includes(VacancySearch.toLowerCase())
            ){
                return value
            }
        }).map((article, i) => (
        <article key={i} class="postcard light blue">
			<a class="postcard__img_link" href="#">
				<img class="postcard__img" src={article.jobImage} alt="Image Title" />
			</a>
	
  		<div class="postcard__text t-dark">
				<h1 class="postcard__title blue"><a href="#">{article.jobTitle}</a></h1>
				<div class="postcard__subtitle small">
						<i class="fas fa-calendar-alt mr-2"></i> {article.publishedDate}
			</div>
	
  	<div class="postcard__bar"></div>
		<div class="postcard__preview-txt">{article.jobDescription}</div>
           <button type="button" class="btn btn-primary btn-sm"><Link to={`/ApplyVacancy/`} >Apply Now </Link></button><br></br>
		   <button type="button" class="btns">Save Job </button> 
	</div>
</article>
))}


	</div>
 </div>
	 </body>
  
    );
    }

export default VacancyDisplay;