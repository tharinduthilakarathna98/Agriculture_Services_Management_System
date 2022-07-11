const express = require("express");
const {
  getapplyguidance,
  addApplyGuidance,
  removeApplyGuidance,
} = require("../controllers/ApplyforGuidanceController");
const router = express.Router();

router.get("/all", getapplyguidance);

router.post("/", addApplyGuidance);

router.delete("/:id",removeApplyGuidance);

module.exports = router;
