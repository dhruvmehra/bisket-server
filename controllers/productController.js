const productService = require("../service/productService");

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category, imageUrl } = req.body;
    const product = await productService.createProduct({
      name,
      price,
      description,
      category,
      imageUrl,
    });
    res.json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

// Get a single product by ID
exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    res.json(product);
  } catch (error) {
    console.error("Error getting product:", error);
    res.status(500).json({ message: "Failed to get product" });
  }
};

// Get a single product by ID
exports.getProductList = async (req, res) => {
  try {
    const product = await productService.getProductsFromSwell();
    res.json(product);
  } catch (error) {
    console.error("Error getting product:", error);
    res.status(500).json({ message: "Failed to get product" });
  }
};

// Update a product
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const product = await productService.updateProduct(id, {
      name,
      price,
      description,
    });
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Failed to update product" });
  }
};

// Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};
