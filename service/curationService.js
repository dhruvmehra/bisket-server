const Curation = require("../models/curation");

// Create a new curation
exports.createCuration = async (curationData) => {
  try {
    const { title, description, image, products } = curationData;
    const curation = new Curation({ title, description, image, products });
    await curation.save();
    return curation;
  } catch (error) {
    console.error("Error creating curation:", error);
    throw new Error("Failed to create curation");
  }
};

// Get a curation by curationId
exports.getCurationById = async (curationId) => {
  try {
    const curation = await Curation.findOne({ curationId: curationId });
    if (!curation) {
      throw new Error("Curation not found");
    }
    return curation;
  } catch (error) {
    console.error("Error getting curation:", error);
    throw new Error("Failed to get curation");
  }
};

// Get a curation by curationId
exports.getCurationById = async (curationId) => {
  try {
    const curation = await Curation.findOne({ curationId: curationId });
    if (!curation) {
      throw new Error("Curation not found");
    }
    return curation;
  } catch (error) {
    console.error("Error getting curation:", error);
    throw new Error("Failed to get curation");
  }
};
