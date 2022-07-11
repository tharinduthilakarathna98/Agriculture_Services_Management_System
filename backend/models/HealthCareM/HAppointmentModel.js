const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
      
       CustomerName:{
          type:String
      },
       NIC:{
           type:String 
      },
       AnimalType:{
           type:String
      },
       ContactNo:{
           type:String
      },
       Address:{
        type: String
      },
      Date:{
        type: String
      },
      Time:{
        type: String
    }  


});


module.exports = mongoose.model("PostAppoinment",postSchema)