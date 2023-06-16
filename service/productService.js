const Product = require("../models/product");
// Swell integration
const swell = require("swell-node");
swell.init("bisket-store", "bR5f3HvABxGjqX9gIZ8UAwnnSSVhrTMx");

// get products from swell
exports.getProductsFromSwell = async () => {
  try {
    const products = await swell.get("/products");
    // const products = await swell.get("/products");
    return products.results;
  } catch (err) {
    console.error("Error getting products", error);
    throw new Error("Failed to get products");
  }
};

// Create a new product
exports.createProduct = async (productData) => {
  try {
    const { name, price, description, category, imageUrl } = productData;
    const product = new Product({
      name,
      price,
      description,
      category,
      imageUrl,
    });
    await product.save();
    return product;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product");
  }
};

// Get a single product by ID
exports.getProductById = async (productId) => {
  try {
    const product = await Product.findOne({ productId: productId });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    console.error("Error getting product:", error);
    throw new Error("Failed to get product");
  }
};

// Update a product
exports.updateProduct = async (productId, updateData) => {
  try {
    const product = await Product.findByIdAndUpdate(productId, updateData, {
      new: true,
    });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    console.error("Error updating product:", error);
    throw new Error("Failed to update product");
  }
};

// Delete a product
exports.deleteProduct = async (productId) => {
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      throw new Error("Product not found");
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed to delete product");
  }
};
