const express = require("express");
const router = express.Router();
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { 
  createEnquiry, 
  getEnquiries, 
  replyToEnquiry, 
  getUserEnquiries 
} = require("../controllers/enquiryController");

// Protected User Routes
router.post("/", protect, createEnquiry);
router.get("/user/:email", protect, getUserEnquiries);

// Protected Admin Routes
router.get("/", protect, adminOnly, getEnquiries);
router.put("/:id/reply", protect, adminOnly, replyToEnquiry);

module.exports = router;