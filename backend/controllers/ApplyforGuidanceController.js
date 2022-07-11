const ApplyGuidance = require("../models/ApplyforGuidanceModel");

const addApplyGuidance = (req, res) => {
  const {
    name_with_in,
    nameinfull,
    nic_no,
    address_g,
    mobile_no,
    email_g,
    program,
    Ordinarylevel,
    
  } = req.body;

  console.log(req.body);

  const newApplyGuidance = new ApplyGuidance({
    name_with_in,
    nameinfull,
    nic_no,
    address_g,
    mobile_no,
    email_g,
    program,
    Ordinarylevel,
  });

  newApplyGuidance
    .save()
    .then((createdApplyGuidance) => {
      res.status(200).json(createdApplyGuidance);
    })
    .catch((err) => {
      console.log(error);
    });
};

const getapplyguidance = async (req, res) => {
  try {
    const applyguidance = await ApplyGuidance.find();

    res.status(200).json(applyguidance);
  } catch (error) {
    res.status(400).json(error);
  }
};

const removeApplyGuidance = async (req, res) => {
    const applyguidanceId = req.params.id;
  
    try {
      const applyguidance = await ApplyGuidance.findById(applyguidanceId);
  
      if(!applyguidance){
        return res.status(404).json("There is a no Applicant");
      }
  
      const removeApplyGuidance = await ApplyGuidance.findByIdAndDelete(applyguidanceId);
      res.status(200).json(removeApplyGuidance);
      
    } catch (error) { 
      res.status(400).json(error.message);
    }
   
  }

module.exports = {
  addApplyGuidance,
  getapplyguidance,
  removeApplyGuidance,
};
