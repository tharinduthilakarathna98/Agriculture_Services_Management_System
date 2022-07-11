const mongoose = require('mongoose')

const ApplyforGuidanceSchema = mongoose.Schema({
    name_with_in:String,
    nameinfull:String,
    nic_no:String,
    address_g:String,
    mobile_no:String,
    email_g:String,
    program:String,
    Ordinarylevel:String,

});

const ApplyforGuidanceModel = mongoose.model("ApplyforGuidanceModel", ApplyforGuidanceSchema);
module.exports = ApplyforGuidanceModel;