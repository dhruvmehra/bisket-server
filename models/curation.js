const mongoose = require("mongoose");

const curationSchema = new mongoose.Schema({
  curationId: {
    type: mongoose.Schema.Types.ObjectId,
    auto: true,
  },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Curation", curationSchema);
