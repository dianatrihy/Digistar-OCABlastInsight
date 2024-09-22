const blasts = require("../models/blast.js");

const createBlast = async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  blasts
    .createBlast(req.body)
    .then((blast) => {
      return res
        .status(200)
        .json({ message: "blast created successfully", data: blast });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ message: `${error}` });
    });
};

const getAllBlasts = async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  blasts
    .listBlasts()
    .then((blast) => {
      return res.status(200).json({ data: blast });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ message: `${error}` });
    });
};

module.exports = { createBlast, getAllBlasts };
