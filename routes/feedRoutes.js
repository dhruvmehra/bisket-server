const express = require("express");
const router = express.Router();

const FeedController = require("../controllers/feedController");

// Define feed routes
router.get("/feed", FeedController.generateFeed);

module.exports = router;
