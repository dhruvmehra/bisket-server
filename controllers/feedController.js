const Product = require("../models/product");

// Feed controller methods
exports.generateFeed = async (req, res) => {
  try {
    // Fetch the latest products or any other logic for generating the feed
    const feed = await Product.find().sort({ createdAt: -1 }).limit(10); // Fetching the latest 10 products as an example

    res.json(feed);
  } catch (error) {
    console.error("Error generating feed:", error);
    res.status(500).json({ message: "Failed to generate feed" });
  }
};
