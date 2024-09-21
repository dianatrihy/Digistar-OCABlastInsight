const blasts = require("../models/blast.js");

const createBlast = async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  blasts
    .createBlast(req.body)
    .then((blast) => {
      return res.status(200).json({ message: "blast created successfully" });
    })
    .catch((error) => {
      console.error(error);
      return res.status(500).json({ message: `${error.name}` });
    });
};

module.exports = { createBlast };
