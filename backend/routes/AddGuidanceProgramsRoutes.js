const express = require("express");
const {
  getguidance,
  addGuidance,
  updateGuidance,
  removeGuidance,
  getsingleguidance,
 
} = require("../controllers/AddGuidanceProgramsController");
const router = express.Router();

router.get("/all", getguidance);

router.get("/:id", getsingleguidance);

router.post("/", addGuidance);

router.put("/:id",updateGuidance);

router.delete("/:id",removeGuidance)

module.exports = router;
