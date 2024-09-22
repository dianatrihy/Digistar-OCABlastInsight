const express = require("express");
const cors = require("cors");
const blastRouter = require("./routes/blastRoute.js");

const db = require("./config/db.js");

const app = express();
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded requests
app.use(cors());

db.connectDB();

app.use("/api", blastRouter);
app.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000");
});
