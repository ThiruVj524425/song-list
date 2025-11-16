import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import songs from "../songs.json" with { type: "json" };

const app = express();

// Enable CORS
app.use(cors({ origin: "*" }));
app.options("*", (req, res) => res.sendStatus(200));

app.get("/songs", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = songs.slice(startIndex, endIndex);

  res.json({
    status: "success",
    page,
    limit,
    total: songs.length,
    totalPages: Math.ceil(songs.length / limit),
    data: results
  });
});

const handler = serverless(app);

export default handler;
