const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdvertismentContactSchema = new Schema({

    name:String,
    email:String,
    phone:String,
    message:String,

});

const AdsContact = mongoose.model("AdvertiserContactModel", AdvertismentContactSchema);

module.exports = AdsContact;
        