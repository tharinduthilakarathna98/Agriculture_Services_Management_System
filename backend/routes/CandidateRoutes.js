const express = require("express");
const router = express.Router();
const { 
    addCandidate,
    getCandidate,
    updateCandidate,
    removeCandidate,
 } = require("../controllers/CandidateController");


router.get("/all", getCandidate);

router.post("/", addCandidate);

router.put("/:id",updateCandidate);

router.delete("/:id",removeCandidate);

module.exports = router;
