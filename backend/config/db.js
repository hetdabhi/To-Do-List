const mongoose = require("mongoose");
require("dotenv").config(); // Ensure dotenv is loaded

const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ MongoDB URI is missing in .env file!");
  process.exit(1);
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

module.exports = mongoose;
