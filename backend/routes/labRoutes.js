const express = require("express");
//variable ekak hadagaththa Module eken
const ReportA = require("../models/LabModules");

const router = express.Router();

//Add Report
router.post("/add", (req, res) => {
  //creating new variable
  let newReport = new ReportA(req.body);

  newReport.save((err) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: "Report Saved Successfully",
    });
  });
});

//Get Report
router.get("/all", (req, res) => {
  ReportA.find().exec((err, reports) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    return res.status(200).json({
      success: true,
      reports,
    });
  });
});

//Update Report
router.put("/update/:id", (req, res) => {
  ReportA.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (err, report) => {
      if (err) {
        return res.status(400).json({ error: err });
      }
      return res.status(200).json({
        success: "Updated Successfully",
      });
    }
  );
});

//Delete Report
router.delete("/delete/:id", (req, res) => {
  ReportA.findByIdAndRemove(req.params.id).exec((err, deleteReport) => {
    if (err)
      return res.status(400).json({
        message: "Delete Unsuccessfil",
        err,
      });

    return res.json({
      message: "Delete successfull",
      deleteReport,
    });
  });
});

//Get a specific report
router.get("/oneR/:id", (req, res) => {
  let reportId = req.params.id;
  ReportA.findById(reportId, (err, report) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({
      success: true,
      report,
    });
  });
});

module.exports = router;
