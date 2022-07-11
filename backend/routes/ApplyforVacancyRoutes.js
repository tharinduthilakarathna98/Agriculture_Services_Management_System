const express = require("express");
const {
  getapply,
  addApply,
  removeApply,
} = require("../controllers/ApplyforVacancyController");
const router = express.Router();

router.get("/all", getapply);

router.post("/", addApply);

router.delete("/:id",removeApply);

module.exports = router;
