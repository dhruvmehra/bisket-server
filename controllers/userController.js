const userService = require("../service/userService");

// User controller methods
exports.createUser = async (req, res) => {
  try {
    const { name, email, role, interests } = req.body;
    const user = await userService.createUser({ name, email, role, interests });
    res.json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    res.json(user);
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ message: "Failed to get user" });
  }
};

// Add more user controller methods as needed
