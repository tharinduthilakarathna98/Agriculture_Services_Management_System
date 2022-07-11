const express = require("express");
const {
  getvacancy,
  addVacancy,
  updateVacancy,
  removeVacancy,
  getsinglevacancy,

} = require("../controllers/AddVacanciesController");
const router = express.Router();

router.get("/all", getvacancy);

router.get("/:id", getsinglevacancy);

router.post("/", addVacancy);

router.put("/:id",updateVacancy);

router.delete("/:id",removeVacancy);

module.exports = router;
