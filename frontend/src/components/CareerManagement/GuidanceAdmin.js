import react,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios"; 

function GuidanceAdmin(){
    const [guidance, setGuidance] = useState([])
    const [GuidanceSearch , setcrsSearch] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8000/api/AddGuidances/all").then(res => {
           setGuidance(res.data);
           console.log(res.data);
        })		
        }, []) 

        const Delete = (id) => {
            axios.delete(`http://localhost:8000/api/AddGuidances/${id}`).then((res) => {
              alert("Program Deleted Successfully!");
            });
            window.location.reload(false);
          };

    return(
        <div>
       <div class="h1 text-center text-dark" id="pageHeaderTitle">Guidance Programs Admin Dashboard</div>

      <div class="card shodow mb-4">
      <div class="card-header py-3">
      <div>
                   <button  class="btn btn-success" data-toggle="modal"  > <Link to={`/AddNewGuidance/`} > Add New Programs</Link>  </button>
                   </div>

                   <div className="input-group" style={{ width: "30rem",  }}>
                       <div class="srch"> <input type="search"  onChange ={(e)=>{setcrsSearch(e.target.value); }} className="form-control rounded" placeholder="Search Program" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" id="srbttn"  className="btn btn-col" style={{color:"white"}}><i class="fa fa-search"></i></button></div>
  
</div>
    </div>
    
   <div class="card-body">
   <div class="table-responsive">
   <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                        <th>ProgramNo&nbsp;</th>
                        <th>Program Name</th>
                        <th>Description&nbsp;</th>
                        <th>Image</th>
                        <th>PublishedDate</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>

                {guidance && guidance.filter(value=>{
            if(GuidanceSearch ===""){
                return value;
            }else if(
                value.programName.toLowerCase().includes(GuidanceSearch.toLowerCase())
            ){
                return value
            }
        }).map((guide, i) => (

                     <tr data-status="active">
                        <td>{guide.programNo}</td>
                        <td>{guide.programName}</td>
                        <td><span class="label label-success">{guide.programDescription}</span></td>
                        <td>{guide.programImage}</td>
                        <td>{guide.publishedDate}</td>
                        <td>
                            <Link
                    className="btn btn-danger"
                    to="#"
                    onClick={() => Delete(guide._id)}
                  >
                    <i className="far fa-trash-alt"></i>&nbsp;Delete
                  </Link></td>
                        <td><button  className="btn btn-warning" > <Link to={`/UpdateGuidance/${guide._id}`} > Update </Link>  </button></td>
                     </tr>

                 ))}
                
                </tbody>
            </table>
        </div> 
    </div>   
</div> 

        </div>
        
        );
    }
export default GuidanceAdmin;