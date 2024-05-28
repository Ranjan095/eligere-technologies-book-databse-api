let mongoose = require("mongoose");

let dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
  } catch (error) {
    console.log({
      message: "Somthing failed to connect the Mongoose server",
      error: error,
    });
  }
};

module.exports = dbConnection;
