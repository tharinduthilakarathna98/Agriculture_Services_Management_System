const cfeedback=require("../models/CourseFeedbackModel");
const addCfeedback =(req, res)=>{

    const { c_cid,cuser_name,c_feedback} = req.body;
    
  
    const newCfeedback = new cfeedback({
        c_cid,
        cuser_name,
        c_feedback,
    });
//create feedback
    newCfeedback.save().then((createcFeedback)=>{
        res.json(createcFeedback);
    }).catch((err)=>{
        console.log(error);
    });
  };
  module.exports = {
    addCfeedback,
  }