const mongoose=require('mongoose')

const CourseSchema=new mongoose.Schema({
    course_id:String,
    course_name:String,
   
    course_category:String,
    
    course_thumbnail:String,
    
    course_description:String,
   
    course_provideemail:String,
   
    course_institute:String,
  
    lessons:String,
  
    video_source:String,
    

    video_link:String,
  
    course_video:String,
     



});

const CourseModel = mongoose.model("courses", CourseSchema);
module.exports = CourseModel;