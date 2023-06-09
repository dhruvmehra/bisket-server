const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productController");

// Define product routes
router.post("/", ProductController.createProduct);
router.get("/:id", ProductController.getProduct);
// Add more product routes as needed

module.exports = router;
