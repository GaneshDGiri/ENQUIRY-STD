const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Generate JWT Helper
const generateToken = (id, secret, expiresIn) => {
  return jwt.sign({ id }, secret, { expiresIn });
};

exports.registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    const user = await User.create({ name, email, password });
    
    if (user) {
      res.status(201).json({ success: true, message: "User registered successfully" });
    }
  } catch (error) {
    next(error);
  }
};

exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        token: generateToken(user._id, process.env.JWT_SECRET, "30d"),
        user: { id: user._id, name: user.name, email: user.email }
      });
    } else {
      res.status(401);
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    next(error);
  }
};

exports.adminLogin = (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    // In a real app, hash this or store it in the DB. 
    // Kept hardcoded here per your original requirements.
    if (email === "giriganesh016@gmail.com" && password === "Gani@3010") {
      res.json({
        success: true,
        token: generateToken("admin", process.env.ADMIN_SECRET, "1d"),
        message: "Admin login successful"
      });
    } else {
      res.status(401);
      throw new Error("Invalid admin credentials");
    }
  } catch (error) {
    next(error);
  }
};