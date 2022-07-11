const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    SId :{
        type: String,
       
    },
    
   ScontactNo:{
       type: String,
      
    },
    PId:{
        type: String,
      
    },
    PName:{
        type: String,
       
    },
    Quentity:{
        type: String
    }
});

module.exports = mongoose.model("PostsPro",postsSchema)