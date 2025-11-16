const express = require("express");
const cors = require("cors");
const songs = require("../songs.json");

const app = express();

// Enable CORS for all origins
app.use(cors());
app.options("*", cors()); // handle preflight
app.use(express.json());

// Songs endpoint with pagination
app.get("/api/songs", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = songs.slice(startIndex, endIndex);

  res.json({
    success: true,
    page,
    limit,
    total: songs.length,
    totalPages: Math.ceil(songs.length / limit),
    data: results,
  });
});

// Test route
app.get("/", (req, res) => {
  res.json("Thiru vj Songs API is running");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // For vercel Deployment


