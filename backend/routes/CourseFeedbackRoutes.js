const express = require("express");
const router = express.Router();
const { 
    addCfeedback
    
 } = require("../controllers/CFeedbackControllers");

 router.post("/",addCfeedback);

 module.exports = router;