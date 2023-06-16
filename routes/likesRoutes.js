var express = require("express");
var router = express.Router();

const LikesController = require("../controllers/likesController");

// User routes
router.post("/increment_like", LikesController.incrementLikes);
router.get("/", LikesController.getLikes);
router.post("/resetAll", LikesController.resetLikesForAllImages);

module.exports = router;
