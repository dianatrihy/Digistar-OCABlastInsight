const express = require("express");

const { createBlast } = require("../controllers/blastController.js");

const blastRouter = express.Router();

blastRouter.post("/create-blast", createBlast);

module.exports = blastRouter;
