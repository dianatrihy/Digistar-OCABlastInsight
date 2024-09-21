const mongoose = require("mongoose");

const blastTemplate = new mongoose.Schema(
  {
    name: String,
    body: String,
  },
  { timestamps: true }
);

const blastSchema = new mongoose.Schema(
  {
    broadcast_name: String,
    message: { type: String, required: true },
    contact: { type: String, required: true },
    template: { blastTemplate },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    schedule_start: { type: Date, required: true },
    schedule_end: { type: Date, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const blasts = mongoose.model("blasts", blastSchema);

const createBlast = async (blast) => {
  return await blasts.create(blast);
};

module.exports = { createBlast };
