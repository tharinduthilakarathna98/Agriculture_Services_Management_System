const mongoose = require('mongoose')


const eventSchema = new mongoose.Schema({

        Event_Id:String,
        Event_Name:String,
        Category:String,
        Start_Date:String,
        Start_Time:String,
        Venue:String,
        Description:String,
        Image:String,

});


    const eventsModel = mongoose.model("eventsModel", eventSchema)
    module.exports = eventsModel;


