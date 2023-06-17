const Like = require("../models/like");

// Like service methods
exports.getLikes = async () => {
  try {
    const likes_map = {};
    const likes = await Like.find();
    // console.log(likes);
    likes.forEach((item) => {
      // console.log(item.public_id, item.likes); // Check the values of public_id and likes
      likes_map[item.public_id] = parseFloat(item.likes);
    });

    return likes_map;
  } catch (error) {
    console.error("Error getting likes:", error);
    throw new Error("Failed to get likes");
  }
};
exports.incrementLikesById = async (public_id) => {
  try {
    let image_obj = await Like.findOne({ public_id: public_id });

    // Increment the likes
    image_obj.likes += 1;

    // Save the updated user
    await image_obj.save();

    return image_obj;
  } catch (error) {
    console.error("Error incrementing likes:", error);
    throw new Error("Failed to increment likes");
  }
};

exports.createLike = async (publicId, likes) => {
  try {
    const like = new Like({ public_id: publicId, likes });
    await like.save();
    return like;
  } catch (error) {
    console.error("Error creating like:", error);
    throw new Error("Failed to create like");
  }
};
