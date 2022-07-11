const mongoose = require('mongoose')

const AddVacanciesSchema = mongoose.Schema({
   vacancyNo:String,
   jobTitle:String,
   jobDescription:String,
   jobImage:String,
   publishedDate:String,
    
});

const AddVacanciesModel = mongoose.model("AddVacanciesModel", AddVacanciesSchema);
module.exports = AddVacanciesModel;