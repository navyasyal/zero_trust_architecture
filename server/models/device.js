const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  deviceId: { type: String, required: true },
  ipAddress: String,
  userAgent: String,
  isTrusted: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Device", deviceSchema);
