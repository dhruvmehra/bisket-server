const admin = require("firebase-admin");
require("dotenv").config();

// Initialize the Firebase Admin SDK
const serviceAccount = require("../config/serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // Add any other necessary configuration options
});

const authenticateUser = (req, res, next) => {
  // Get the token from the request headers
  // Just extract the token number from the JWT

  if (!req.headers.authorization) {
    throw new Error("Access denied. Missing token.");
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. Missing token." });
  }

  try {
    // Verify the ID token using the Firebase Admin SDK
    admin
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        req.user = decodedToken; // Attach the decoded user token to the request
        next(); // Proceed to the next middleware
      })
      .catch((error) => {
        console.error("Error verifying ID token:", error);
        return res.status(401).json({ message: "Invalid token." });
      });
  } catch (error) {
    console.error("Error verifying ID token:", error);
    return res.status(401).json({ message: "Invalid token." });
  }
};

module.exports = authenticateUser;
