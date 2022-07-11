const Candidate = require("../models/CandidateModel");


 const addCandidate = (req, res)=>{

  const {name_with_initials,name_in_full,date_of_birth,nic,address,mobile,email,linked_in_profile,ordinarylevel,advancedlevel,degree,cv} = req.body;
  
  const newCandidate = new Candidate({

    name_with_initials,
    name_in_full,
    date_of_birth,
    nic,
    address,
    mobile,
    email,
    linked_in_profile,
    ordinarylevel,
    advancedlevel,
    degree,
    cv,
  });

   newCandidate.save().then((createdCandidate)=>{
      res.json(createdCandidate);
  }).catch((err)=>{
      console.log(error);
  });
};

const getCandidate = async (req, res) => {

  try{
    const candidate = await Candidate.find();
    res.json(candidate)

  }catch(error){
    res.status(400).json(error);
  }
}

const updateCandidate = async (req, res) => {
  const candidateId = req.params.id;

  try {
    const candidate = await Candidate.findById(candidateId);

    if(!candidate){
      return res.status(404).json("There is a no candidate");
    }

    const {name_with_initials,name_in_full,date_of_birth,nic,address,mobile,email,linked_in_profile,ordinarylevel,advancedlevel,degree,cv} = req.body;
    
    const candi = await Candidate.findByIdAndUpdate(candidateId, {name_with_initials,name_in_full,date_of_birth,nic,address,mobile,email,linked_in_profile,ordinarylevel,advancedlevel,degree,cv});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const removeCandidate = async (req, res) => {
  const candidateId = req.params.id;

  try {
    const candidate = await Candidate.findById(candidateId);

    if(!candidate){
      return res.status(404).json("There is a no candidate");
    }

    const removeCandidate = await Candidate.findByIdAndDelete(candidateId);
    res.status(200).json(removeCandidate);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
 
}

module.exports = {
  addCandidate,
  getCandidate,
  updateCandidate,
  removeCandidate
}