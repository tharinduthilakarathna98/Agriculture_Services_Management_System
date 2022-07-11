const Apply = require("../models/ApplyforVacancyModel");

const addApply = (req, res) => {
  const {
    position,
    name_with_init,
    namefull,
    dob,
    nicNo,
    Address,
    Mobile,
    Email,
    linkedIn,
    Ordinarylevel,
    Advancedlevel,
    Degree,
    CV,
  } = req.body;

  console.log(req.body);

  const newApply = new Apply({
    position,
    name_with_init,
    namefull,
    dob,
    nicNo,
    Address,
    Mobile,
    Email,
    linkedIn,
    Ordinarylevel,
    Advancedlevel,
    Degree,
    CV,
  });

  newApply
    .save()
    .then((createdApply) => {
      res.status(200).json(createdApply);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getapply = async (req, res) => {
  try {
    const apply = await Apply.find();

    res.status(200).json(apply);
  } catch (error) {
    res.status(400).json(error);
  }
};

const removeApply = async (req, res) => {
    const applyId = req.params.id;
  
    try {
      const apply = await Apply.findById(applyId);
  
      if(!apply){
        return res.status(404).json("There is a no Applicant");
      }
  
      const removeApply = await Apply.findByIdAndDelete(applyId);
      res.status(200).json(removeApply);
      
    } catch (error) { 
      res.status(400).json(error.message);
    }
   
  }

module.exports = {
  addApply,
  getapply,
  removeApply,
};
