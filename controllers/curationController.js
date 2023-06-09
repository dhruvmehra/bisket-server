const curationService = require("../services/curationService");

// Create a new curation
exports.createCuration = async (req, res) => {
  try {
    const { title, description, image, products } = req.body;
    const curation = await curationService.createCuration({
      title,
      description,
      image,
      products,
    });
    res.json({ message: "Curation created successfully", curation });
  } catch (error) {
    console.error("Error creating curation:", error);
    res.status(500).json({ message: "Failed to create curation" });
  }
};

// Get a curation by curationId
exports.getCurationById = async (req, res) => {
  try {
    const { curationId } = req.params;
    const curation = await curationService.getCurationById(curationId);
    res.json(curation);
  } catch (error) {
    console.error("Error getting curation:", error);
    res.status(500).json({ message: "Failed to get curation" });
  }
};

// Add more curation controller methods as needed
