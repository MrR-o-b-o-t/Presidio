const express = require("express");
const axios = require("axios");
const cors = require("cors");

require("dotenv").config();
console.log(process.env.BING_API_KEY);
const searchController = require("./controllers/searchController");

const app = express();
app.use(cors());
const port = 5000;

app.get("/api/search/:query", searchController.search);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
