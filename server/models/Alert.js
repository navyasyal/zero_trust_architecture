const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: String,
  severity: {
    type: String,
    enum: ["LOW", "MEDIUM", "HIGH"]
  },
  createdAt: { type: Date, default: Date.now },
  resolved: { type: Boolean, default: false }
});

module.exports = mongoose.model("Alert", alertSchema);
