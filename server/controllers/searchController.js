const axios = require("axios");

const search = async (req, res) => {
  const { query } = req.params;
  console.log(`Request params from searchController: ${req.params}`);

  try {
    const apiKey = process.env.BING_API_KEY;
    const url = `https://api.bing.microsoft.com/v7.0/search?q=${query}`;
    console.log("Making API request...");
    console.log("URL:", url);

    const response = await axios.get(url, {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { search };
