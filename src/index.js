const express = require("express");
const bodyParser = require("body-parser");
const blastRouter = require("./routes/blastRoute.js");

const db = require("./config/db.js");

const app = express();
app.use(bodyParser);

app.use("/api", blastRouter);

db.connectDB();
app.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000");
});
