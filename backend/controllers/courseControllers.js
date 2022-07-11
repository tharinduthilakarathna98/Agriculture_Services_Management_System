const course=require("../models/CourseModel");
const addCourses =(req, res)=>{

    const {course_id,course_name,course_category,course_thumbnail,course_description, course_provideemail,course_institute,lessons,video_source,video_link,course_video} = req.body;
    
  
    const newCourse = new course({
        course_id,
        course_name,
        course_category,
        course_thumbnail,
        course_description,
        course_provideemail,
        course_institute,
        lessons,
        video_source,
        video_link,
        course_video,
    });
  //create
    newCourse.save().then((createCourse)=>{
        res.json(createCourse);
    }).catch((err)=>{
        console.log(error);
    });
  };
  //get
  const getCourses = async (req, res) => {
  
    try{
      const cors = await course.find();
      res.json(cors);
  
    }catch(error){
      res.status(400).json(error);
    }
  }
//update
  const updateCourse = async (req, res) => {
    const courseId = req.params.id;
  
    try {
      const cRs = await course.findById(courseId);
  
      if(!cRs){
        return res.status(404).json("There is a no Courses");
      }
  
      const {course_id,course_name,course_category,course_thumbnail,course_description,course_price,course_institute,lessons,video_source,video_link,course_video} = req.body;
      
      const cor = await course.findByIdAndUpdate(courseId, {course_id,course_name,course_category,course_thumbnail,course_description,course_price,course_institute,lessons,video_source,video_link,course_video});
  
    } catch (error) { 
      res.status(400).json(error.message);
    }
  }

//delete
  const removeCourse = async (req,res) => {
    const cid = req.params.id;
  
    try{
      const crs = await course.findById(cid);
      if(!crs){
        return res.status(404).json("There is no Courses to remove");
      }
  
      const removeCourse = await course.findByIdAndDelete(cid);
      res.status(200).json(removeCourse)
    }catch(error){
      res.status(400).json(error.message);
  
  
    }
  }
  //find one id
  const getsinglecourse = async (req, res) => {
    try {
      const id = req.params.id;
      const couRse = await course.findById(id);
      res.status(200).json(couRse);
    } catch (error) {
      res.status(400).json(error);
    }
  };

  //find category courses

  const getcategory = async (req, res) => {
    try {
      const cat = req.params.cat;
      console.log(cat);
      const couRse = await course.find({course_category:cat});
      res.status(200).json(couRse);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  

  
  module.exports = {
    addCourses,
    getCourses,
    updateCourse,
    removeCourse,
    getsinglecourse,
    getcategory,
  }