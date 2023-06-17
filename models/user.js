const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  name: { type: String },
  email: { type: String, required: true, unique: true },
  role: { type: String },
  dateJoined: { type: Date, default: Date.now }, // Added "dateJoined" field with default value as current date and time
  interests: { type: String }, // Added "interests" field as an optional string
  likes_remaining: { type: Number },
});

module.exports = mongoose.model("User", userSchema);
