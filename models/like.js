const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  public_id: { type: String, required: true },
  likes: { type: Number, required: true },
});

module.exports = mongoose.model("Like", likeSchema);
