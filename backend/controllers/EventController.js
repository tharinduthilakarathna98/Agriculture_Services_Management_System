const Event = require("../models/eventsModel");

const addEvent = (req, res) => {
    const {Event_Id, Event_Name, Category, Start_Date, Start_Time, Venue, Description, Image} = req.body;
    const newEvent = new Event({
        Event_Id,
        Event_Name,
        Category,
        Start_Date,
        Start_Time,
        Venue,
        Description,
        Image,
    });

    newEvent.save().then((createdEvent)=>{
        res.json(createdEvent);
    }).catch((err)=>{
        console.log(error);
    });
};
const getEvent = async(req,res)=>{
    try{
        const event = await Event.find();
        res.json(event)
    }catch(error){
        res.status(400).json(error);
    }
}

const getsingleevent = async (req, res) => {
    try {
      const id = req.params.id;
      const event = await Event.findById(id);
      res.status(200).json(event);
    } catch (error) {
      res.status(400).json(error);
    }
  };



const updateEvent = async(req, res) =>{
const Event_id =req.params.id;

try{

    const event = await Event.findById(Event_id);

    if(!event){

        return res.status(404).json("There is a no event");
    }
    const {Event_Id, Event_Name, Category, Start_Date, Start_Time, Venue, Description, Image} = req.body;
    const eve = await Event.findByIdAndUpdate(Event_id, {Event_Id, Event_Name, Category, Start_Date, Start_Time, Venue, Description, Image});

    res.status(201).json({"Updated": true});
}catch (error) {
    res.status(400).json(error.message);
}
}


const removeEvent = async (req, res)=> {

    const Event_id = req.params.id;

    try{

        const event = await Event.findById(Event_id);

        if(!event){

            return res.status(404).json("There is no event");
        }

        const removeEvent = await Event.findByIdAndDelete(Event_id);
        res.status(200).json(removeEvent);
    }catch (error) {

        res.status(400).json(error.message);


    }
}

    module.exports = {
     addEvent,
     getEvent,
     updateEvent,
     getsingleevent,
     removeEvent
    }
