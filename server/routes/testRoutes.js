const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const allowRoles = require("../middleware/roleMiddleware");
const deviceCheck = require("../middleware/deviceMiddleware");

// 👩‍🎓 Intern Resource
router.get("/intern-data", auth, allowRoles(["intern", "employee", "admin"]), (req, res) => {
  res.json({ message: "Intern level resource accessed" });
});

// 👨‍💼 Employee Resource
router.get("/employee-data", auth, allowRoles(["employee", "admin"]), (req, res) => {
  res.json({ message: "Employee level resource accessed" });
});

// 👑 Admin Resource
router.get("/admin-data", auth, allowRoles(["admin"]), (req, res) => {
  res.json({ message: "Admin level resource accessed" });
});

router.get(
  "/employee-data",
  auth,
  allowRoles(["employee", "admin"]),
  deviceCheck,
  (req, res) => {
    res.json({
      message: "Employee resource accessed",
      deviceTrusted: req.device.isTrusted
    });
  }
);

module.exports = router;
