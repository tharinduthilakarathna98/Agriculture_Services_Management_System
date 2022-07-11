const express = require("express");
const router = express.Router();

const{
    addEvent,
    getEvent,
    updateEvent,
    removeEvent,
    getsingleevent,

} = require("../controllers/EventController");

router.get("/all",getEvent);

router.post("/",addEvent);

router.put("/:id",updateEvent);

router.delete("/:id",removeEvent);

router.get("/:id", getsingleevent);
module.exports = router;