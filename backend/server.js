const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const memberRoutes = require("./routes/memberRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/student_team_members";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/members", memberRoutes);

app.use((error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError) {
    return res.status(400).json({ success: false, message: "Invalid member id." });
  }

  if (error.message === "Only image files are allowed.") {
    return res.status(400).json({ success: false, message: error.message });
  }

  return res.status(500).json({
    success: false,
    message: "Unexpected server error.",
    error: error.message,
  });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
