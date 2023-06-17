require("dotenv").config();
const likesService = require("../service/likesService");
const cloudinary = require("cloudinary").v2;
const Like = require("../models/like");

// Initialize Cloudinary with your credentials
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// likes controller methods
exports.getLikes = async (req, res) => {
  try {
    const likes = await likesService.getLikes();
    res.json(likes);
  } catch (error) {
    console.error("Error getting likes:", error);
    res.status(500).json({ message: "Failed to get likes" });
  }
};

exports.incrementLikes = async (req, res) => {
  try {
    const { id } = req.body;
    const likes = await likesService.incrementLikesById(id);
    res.json({ message: "likes updated successfully", likes });
  } catch (error) {
    console.error("Error getting likes:", error);
    res.status(500).json({ message: "Failed to get likes" });
  }
};

exports.resetLikesForAllImages = async (req, res, next) => {
  //delete old
  try {
    await Like.collection.drop();
    console.log("Like collection deleted successfully");
  } catch (error) {
    console.error("Error deleting like collection:", error);
  }
  // create new
  try {
    const images = await getImagesFromCloudinary(); // Implement the logic to fetch all images from Cloudinary

    const likePromises = images.map((image) => {
      return likesService.createLike(image.public_id, 0);
    });

    await Promise.all(likePromises);

    res.status(200).json({ message: "Likes created for all images" });
  } catch (error) {
    console.error("Error creating likes:", error);
    res.status(500).json({ error: "Failed to create likes" });
  }
};

const getImagesFromCloudinary = async () => {
  try {
    // Use the Cloudinary SDK or API to fetch the images
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: process.env.CLOUDINARY_FOLDER,
      max_results: 200,
    });

    // Extract the image URLs or other relevant data from the result
    const images = result.resources.map((resource) => {
      return {
        public_id: resource.public_id,
      };
    });

    return images;
  } catch (error) {
    console.error("Error retrieving images from Cloudinary:", error);
    throw new Error("Failed to retrieve images from Cloudinary");
  }
};
