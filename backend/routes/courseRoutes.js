const express = require("express");
const router = express.Router();
const { 
    addCourses,
    getCourses,
    updateCourse,
    removeCourse,
    getsinglecourse,
    getcategory,
 } = require("../controllers/courseControllers");


//@route GET api/course/all
//@desc Get allcourse
router.get("/all",getCourses);

//@route POST api/course

router.post("/",addCourses);

//@route PUT api/course/:id
//@desc Update an course
router.put("/:id",updateCourse);

//@route delete api/course/:id
//@desc Delete an course
router.delete("/:id",removeCourse);

router.get("/:id",getsinglecourse);

router.get("/cat/:cat",getcategory)
module.exports = router;
