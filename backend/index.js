import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js";
import bannerRoutes from "./routes/BannerRoutes.js";

dotenv.config();

const app = express(); 

// Middleware
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json()); // optional, already using bodyParser.json()

connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("Server and MongoDB connected successfully!");
});

// Admin routes
app.use("/api/admin", adminRoutes);

app.use("/api/banners", bannerRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
