const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

require("dotenv").config();
const searchController = require("./controllers/searchController");

const app = express();
app.use(cors());
const publicPath = path.join(__dirname, "../client/build");
app.use(express.static(publicPath));

const port = 5000;

app.get("/api/search/:query", searchController.search);

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
