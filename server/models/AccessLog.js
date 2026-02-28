const mongoose = require("mongoose");

const accessLogSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  role: String,
  resource: String,
  ipAddress: String,
  deviceId: String,
  riskScore: Number,
  status: {
    type: String,
    enum: ["ALLOWED", "BLOCKED", "CHALLENGED"]
  },
  reason: String,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("AccessLog", accessLogSchema);
//webhook real test 123