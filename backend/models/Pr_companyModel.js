const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    Company_Id :{
        type: String,
       
    },
    Contact_Name :{
        type: String,
    },

    Company_Email:{
        type: String,
    },

    Company_contactNo:{
       type: String,
      
    },
    Product_Id:{
       type: String,
      
    },
    Product_Name:{
        type: String,
       
    },
   
    Quentity:{
        type: String
    }
});

module.exports = mongoose.model("PostCompanyReq",postsSchema)