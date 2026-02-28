const Device = require("../models/device");

module.exports = async function deviceCheck(req, res, next) {
  try {
    const deviceId = req.headers["x-device-id"];
    const ip = req.ip;
    const userAgent = req.headers["user-agent"];

    if (!deviceId) {
      return res.status(400).json({ message: "Device ID missing" });
    }

    let device = await Device.findOne({ deviceId, user: req.user._id });

    if (!device) {
      // New device detected
      device = await Device.create({
        user: req.user._id,
        deviceId,
        ipAddress: ip,
        userAgent,
        isTrusted: false
      });
    }

    req.device = device;
    next();
  } catch (err) {
    res.status(500).json({ message: "Device check failed" });
  }
};
