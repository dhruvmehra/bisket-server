var express = require("express");
var router = express.Router();

const UserController = require("../controllers/userController");

// User routes
router.post("/", UserController.createUser);
// router.get("/:id", UserController.getUser);
router.get("/get_user_email", UserController.getUserByEmail);
router.post("/decrement_like", UserController.decLikeForUser);

module.exports = router;
