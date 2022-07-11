const mongoose = require('mongoose')

const CandidateSchema = mongoose.Schema({
    name_with_initials:String,
    name_in_full:String,
    date_of_birth:String,
    nic:String,
    address:String,
    mobile:String,
    email:String,
    linked_in_profile:String,
    ordinarylevel:String,
    advancedlevel:String,
    degree:String,
    cv:String,
    
});

const CandidateModel = mongoose.model("CandidateModel", CandidateSchema);
module.exports = CandidateModel;