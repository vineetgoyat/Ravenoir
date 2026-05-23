const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./routes/aiRoutes");
const authRoutes = require("./routes/authRoutes");
const memoryRoutes = require("./routes/memoryRoutes");
const connectDB = require("./config/db");

const app = express();

// ================= MIDDLEWARE =================
app.use(express.json());

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// ================= ROUTES =================
app.get("/", (req, res) => {
  res.send("Ravenoir API is running...");
});

app.use("/api/auth", authRoutes);
app.use("/api/memories", memoryRoutes);
app.use("/api/ai", aiRoutes);

// ================= ERROR HANDLER (MUST BE LAST) =================
app.use((err, req, res, next) => {
  console.log("🔥 Server Error:", err);
  res.status(500).json({
    message: "Server Error",
  });
});

// ================= START SERVER AFTER DB =================
const PORT = process.env.PORT || 2000;

connectDB()
  .then(() => {
    console.log("🗄 MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🩸 Ravenoir server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("❌ DB Connection Failed:", err);
  });