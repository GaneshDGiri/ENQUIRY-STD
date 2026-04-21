const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  adminReply: { type: String, default: "" },
  status: { type: String, default: "Pending" }
}, { timestamps: true });

module.exports = mongoose.model("Enquiry", enquirySchema);