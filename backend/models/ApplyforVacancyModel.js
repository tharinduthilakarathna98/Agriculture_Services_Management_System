const mongoose = require('mongoose')

const ApplyforVacancySchema = mongoose.Schema({
    position:String,
    name_with_init:String,
    namefull:String,
    dob:String,
    nicNo:String,
    Address:String,
    Mobile:String,
    Email:String,
    linkedIn:String,
    Ordinarylevel:String,
    Advancedlevel:String,
    Degree:String,
    CV:String,
    
});

const ApplyforVacancyModel = mongoose.model("ApplyforVacancyModel", ApplyforVacancySchema);
module.exports = ApplyforVacancyModel;