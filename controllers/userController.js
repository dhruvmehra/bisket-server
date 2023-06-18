const userService = require("../service/userService");

// User controller methods
exports.createUser = async (req, res) => {
  try {
    const { name, email, role, interests, likes_remaining } = req.body;
    const user = await userService.createUser({
      name,
      email,
      role,
      interests,
      likes_remaining,
    });
    res.json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.query;
    const user = await userService.getUserById(id);
    res.json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Failed to get user" });
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    const { email } = req.query;
    console.log("received email -->", email);
    const user = await userService.getUserByEmailId(email);
    res.json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Failed to get user" });
  }
};

exports.decLikeForUser = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await userService.getUserByEmailId(email);
    user.likes_remaining -= 1;
    user.save();
    res.json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Failed to get user" });
  }
};
// Add more user controller methods as needed
