const Vacancy = require("../models/AddVacanciesModel");

const addVacancy = (req, res) => {
  const {
    vacancyNo,
    jobTitle,
    jobDescription,
    jobImage,
    publishedDate,
  } = req.body;

  console.log(req.body);

  const newVacancy= new Vacancy({
    vacancyNo,
    jobTitle,
    jobDescription,
    jobImage,
    publishedDate,
  });

  newVacancy
    .save()
    .then((createdVacancy) => {
      res.status(200).json(createdVacancy);
    })
    .catch((err) => {
      console.log(error);
    });
};

const getvacancy = async (req, res) => {
  try {
    const vacancy = await Vacancy.find();

    res.status(200).json(vacancy);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getsinglevacancy = async (req, res) => {
  try {
    const id = req.params.id;
    const vacancy = await Vacancy.findById(id);
    res.status(200).json(vacancy);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateVacancy = async (req, res) => {
  const vacancyId = req.params.id;

  try {
    const vacancy = await Vacancy.findById(vacancyId);

    if(!vacancy){
      return res.status(404).json("There is a no Vacancy");
    }

    const {vacancyNo,jobTitle,jobDescription,jobImage,publishedDate} = req.body;
    
    const vacanci = await Vacancy.findByIdAndUpdate(vacancyId, {vacancyNo,jobTitle,jobDescription,jobImage,publishedDate});

    res.status(201).json({
      "Updated": true
    })

  } catch (error) { 
    res.status(400).json(error.message);
  }
}

const removeVacancy = async (req, res) => {
  const vacancyId = req.params.id;

  try {
    const vacancy = await Vacancy.findById(vacancyId);

    if(!vacancy){
      return res.status(404).json("There is a no Vacancy");
    }

    const removeVacancy = await Vacancy.findByIdAndDelete(vacancyId);
    res.status(200).json(removeVacancy);
    
  } catch (error) { 
    res.status(400).json(error.message);
  }
}


module.exports = {
  addVacancy,
  getvacancy,
  getsinglevacancy,
  updateVacancy,
  removeVacancy,
};
