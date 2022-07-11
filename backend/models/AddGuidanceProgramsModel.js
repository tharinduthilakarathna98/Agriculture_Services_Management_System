const mongoose = require('mongoose')

const AddGuidanceProgramsSchema = mongoose.Schema({
   programNo:String,
   programName:String,
   programDescription:String,
   programImage:String,
   publishedDate:String,
    
});

const AddGuidanceProgramsModel = mongoose.model("AddGuidanceProgramsModel", AddGuidanceProgramsSchema);
module.exports = AddGuidanceProgramsModel;