const Enquiry = require("../models/Enquiry");

exports.createEnquiry = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    const enquiry = await Enquiry.create({ name, email, message });
    res.status(201).json({ success: true, data: enquiry });
  } catch (error) {
    next(error);
  }
};

exports.getEnquiries = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    next(error);
  }
};

exports.getUserEnquiries = async (req, res, next) => {
  try {
    // Ensure the user is only fetching their own data
    if (req.user.email !== req.params.email && req.user.role !== "admin") {
      res.status(403);
      throw new Error("Unauthorized to view these messages");
    }

    const enquiries = await Enquiry.find({ email: req.params.email }).sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    next(error);
  }
};

exports.replyToEnquiry = async (req, res, next) => {
  try {
    const { adminReply } = req.body;
    
    if (!adminReply) {
      res.status(400);
      throw new Error("Reply text is required");
    }

    const updatedEnquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { adminReply, status: "Replied" },
      { new: true }
    );

    if (!updatedEnquiry) {
      res.status(404);
      throw new Error("Enquiry not found");
    }

    res.json({ success: true, data: updatedEnquiry });
  } catch (error) {
    next(error);
  }
};