const mongoose = require("mongoose");

const blastSchema = new mongoose.Schema(
  {
    broadcast_name: { type: String, required: true },
    message: { type: String, required: true },
    contact: { type: String, required: true },
    template: { type: String, required: true },
    schedule_start: { type: Date, required: true },
    schedule_end: { type: Date, required: true },
    daily_max_operation: { type: Number, required: true },
    status: { type: String, required: true },
    messages_status: {
      sent: { type: Number },
      delivered: { type: Number },
      failed: { type: Number },
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const blasts = mongoose.model("blasts", blastSchema);

const createBlast = async (blast) => {
  return await blasts.create(blast);
};

const listBlasts = async () => {
  return await blasts.find();
};

module.exports = { createBlast, listBlasts };
