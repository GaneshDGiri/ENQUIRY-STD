const express = require("express");
const router = express.Router();
const { registerUser, loginUser, adminLogin } = require("../controllers/userController");

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// We moved admin login here because it belongs to the Auth/User domain
router.post("/admin/login", adminLogin); 

module.exports = router;