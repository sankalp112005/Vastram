const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected succesfully`);
    }
  catch (error) {
    console.error(`Mongodb connection failed:`, error.message);
    process.exit(1);
  }
};

module.exports = connectDB;