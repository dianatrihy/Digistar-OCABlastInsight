const mongoose = require("mongoose");

const broadcastSchema = new mongoose.Schema(
  {
    campaign_name: { type: String, required: true },
    contact: { type: String, required: true },
    channel: { type: String, required: true },
    schedule_start: { type: Date, required: true },
    schedule_end: { type: Date, required: true },
    daily_max_operation: { type: Number, required: true },
    status: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const broadcast = mongoose.model("broadcast", broadcastSchema);

const listBroadcast = async () => {
  return await broadcast.find();
};

module.exports = { listBroadcast };
