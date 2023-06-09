const User = require("../models/user");

// User service methods
exports.createUser = async (userData) => {
  try {
    const { name, email, role, interests } = userData;
    const user = new User({ name, email, role, interests });
    await user.save();
    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
};

exports.getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    throw new Error("Failed to get user");
  }
};

// Add more user service methods as needed
