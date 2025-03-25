const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 5000;
const FRONTEND_URL = "http://localhost:3000";

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL }));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.send("API is running");
});

// Register routes
const personRoutes = require("./routes/personRoutes");
app.use("/api/persons", personRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
    console.log(`📌 Open the frontend: ${FRONTEND_URL}`);
});
