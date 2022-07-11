const mongoose=require('mongoose')
const FeedbackSchema=new mongoose.Schema({
    c_cid:String,
    cuser_name:String,
   
    c_feedback:String,
    


});

const FeedbackModel = mongoose.model("coursefeedback", FeedbackSchema);
module.exports = FeedbackModel;