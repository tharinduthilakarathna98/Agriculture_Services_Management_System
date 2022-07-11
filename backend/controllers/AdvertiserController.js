const Advertiser = require("../models/AdvertiserModel");

const addAdvertiser = (req, res) => {
    const {
        Adv_name,
        Adv_nic_no,
        Adv_address,
        Adv_mobile,
        Adv_email,
    } = req.body;
  
    const newAdvertiser = new Advertiser({
        Adv_name,
        Adv_nic_no,
        Adv_address,
        Adv_mobile,
        Adv_email,
    });
  
    newAdvertiser
      .save()
      .then((createdAdvertiser) => {
        res.json(createdAdvertiser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  module.exports = {
    addAdvertiser,
  };