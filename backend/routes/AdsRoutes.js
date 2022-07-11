const express = require("express");
const router = express.Router();
const { 
    addAds,
    getAds,
    getsingleAd,
    updateAds,
    removeAds
 } = require("../controllers/AdsController");


//@route GET api/ads/all
//@desc Get all ads
router.get("/all", getAds);

//@route POST api/ads
//@desc Add an ads
router.post("/", addAds);

//@route PUT api/Ads/:id
//@desc Update an Ads
router.put("/:id", updateAds);

//@route DELETE api/Ads/:id
//@desc delete an Ads
router.delete("/:id", removeAds);

//@route getSpecific api/Ads/:id
//@desc getSpecific an Ads
router.get("/:id", getsingleAd);

module.exports = router;
