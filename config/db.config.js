require("dotenv").config();
var mongoose = require("mongoose");

const connect = async () => {
  try {
    const connectionOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@bisket-cluster.dyrtwzz.mongodb.net/?retryWrites=true&w=majority`,
      connectionOptions
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1); // Exit the application if unable to connect
  }
};

module.exports = connect;
