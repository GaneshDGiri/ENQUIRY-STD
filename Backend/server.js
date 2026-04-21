const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middlewares/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/enquiry", require("./routes/enquiryRoutes"));

// Global Error Handler (Must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));