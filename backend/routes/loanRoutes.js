const express = require("express");
const router = express.Router();

const{
    addLoan,
    getLoan,
    removeLoan,

} = require("../controllers/LoanController");

router.get("/all",getLoan);

router.post("/",addLoan);

router.delete("/:id",removeLoan);


module.exports = router;