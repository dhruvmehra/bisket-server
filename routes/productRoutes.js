const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/productController");

// Define product routes
router.post("/", ProductController.createProduct);
router.get("/:id", ProductController.getProduct);
router.get("/", ProductController.getProductList);
// Add more product routes as needed

module.exports = router;
