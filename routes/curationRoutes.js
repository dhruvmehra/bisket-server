const express = require("express");
const router = express.Router();

const curationController = require("../controllers/curationController");

// Define category routes
router.post("/", curationController.createCuration);
router.get("/:id", curationController.getCurationById);
// Add more category routes as needed

module.exports = router;
