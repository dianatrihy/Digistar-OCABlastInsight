const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/oca";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationError: true },
};

async function connectDB() {
  try {
    await mongoose.connect(url, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("pinged your deployment, successfully connect to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed : ", error);
    process.exit(1);
  }
}

async function closeDB() {
  try {
    await mongoose.connect.close();
    console.log("MongoDB Connection closed");
  } catch (error) {
    console.error("MongoDB close atempt failed", error);
  }
}

module.exports = {
  connectDB,
  closeDB,
};
