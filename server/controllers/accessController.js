const AccessLog = require("../models/AccessLog");
const User = require("../models/user");

exports.requestAccess = async (req, res) => {
  const { resource, ipAddress, deviceId } = req.body;
  const user = await User.findById(req.user.id);

  let riskScore = 0;
  let status = "ALLOWED";
  let reason = "Normal behavior";

  if (!deviceId) {
    riskScore += 40;
    reason = "Unknown device";
  }

  if (ipAddress.startsWith("192.168") === false) {
    riskScore += 30;
    reason = "External IP";
  }

  if (riskScore >= 60) {
    status = "BLOCKED";
  } else if (riskScore >= 40) {
    status = "CHALLENGED"; // MFA required
  }

  await AccessLog.create({
    userId: user._id,
    role: user.role,
    resource,
    ipAddress,
    deviceId,
    riskScore,
    status,
    reason
  });

  res.json({ status, riskScore, reason });
};
