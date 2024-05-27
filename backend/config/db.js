const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    console.log("database connected!");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connect;
