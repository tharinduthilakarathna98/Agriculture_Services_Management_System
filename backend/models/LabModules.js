const mongoose = require("mongoose");
//const { default: mongoose } = require('mongoose');

const labSchema = new mongoose.Schema({
  cName: {
    type: String,
    required: true,
  },
  cEmail: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },

  labId: {
    type: String,
    required: true,
  },
  reportStatus: {
    type: String,
    required: true,
  },
});

const labReport = mongoose.model("Report", labSchema);
module.exports = labReport;
