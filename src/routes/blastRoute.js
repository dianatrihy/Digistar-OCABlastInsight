const express = require("express");

const {
  createBlast,
  getAllBlasts,
} = require("../controllers/blastController.js");

const blastRouter = express.Router();

blastRouter.post("/create-blast", createBlast);
blastRouter.get("/blasts", getAllBlasts);

module.exports = blastRouter;
