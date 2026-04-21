const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    try {
      token = token.split(" ")[1];
      
      // First try to verify as a regular user
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select("-password");
        req.user.role = "user";
        return next();
      } catch (userErr) {
        // If user verification fails, try admin verification
        const decodedAdmin = jwt.verify(token, process.env.ADMIN_SECRET);
        req.user = { role: "admin" };
        return next();
      }
    } catch (error) {
      res.status(401);
      return next(new Error("Not authorized, token failed"));
    }
  }

  res.status(401);
  next(new Error("Not authorized, no token provided"));
};

exports.adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403);
    next(new Error("Access denied: Admin privileges required"));
  }
};