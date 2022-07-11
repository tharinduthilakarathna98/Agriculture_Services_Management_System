const Ads = require("../models/AdvertismentModel");

const addAds = (req, res) => {
  const {
    type,
    town,
    AgentRef,
    heading,
    description,
    sizeOfArea,
    priceRate,
    availability,
    contactName,
    email,
    phone,
    img,
  } = req.body;

  const newAd = new Ads({
    type,
    town,
    AgentRef,
    heading,
    description,
    sizeOfArea,
    priceRate,
    availability,
    contactName,
    email,
    phone,
    img,
  });

  newAd
    .save()
    .then((createdAds) => {
      res.json(createdAds);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getAds = async (req, res) => {
  try {
    const ads = await Ads.find();
    res.json(ads);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsingleAd = async (req, res) => {
  try {
    const id = req.params.id;
    const ad = await Ads.findById(id);
    res.status(200).json(ad);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateAds = async (req, res) => {
  const advID = req.params.id;
  try {
    const id = await Ads.findById(advID);

    if (!id) {
      return res.status(404).json("There is no Ad");
    }

    const {
      type,
      town,
      AgentRef,
      heading,
      description,
      sizeOfArea,
      priceRate,
      availability,
      contactName,
      email,
      phone,
      img,
      
    } = req.body;
    const adsr = await Ads.findByIdAndUpdate(advID, {
      type,
      town,
      AgentRef,
      heading,
      description,
      sizeOfArea,
      priceRate,
      availability,
      contactName,
      email,
      phone,
      img,
    });

    res.status(201).json({
      updated: true,
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const removeAds = async (req, res) => {
  const adID = req.params.id;

  try {
    const ad = await Ads.findById(adID);
    if (!ad) {
      return res.status(404).json("There is no Ad to remove");
    }

    const removedAds = await Ads.findByIdAndDelete(adID);
    res.status(200).json(removedAds);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = {
  addAds,
  getAds,
  getsingleAd,
  updateAds,
  removeAds,
};
