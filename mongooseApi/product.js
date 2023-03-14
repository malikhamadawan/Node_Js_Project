const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: String,
  email: String,
  price: Number,
  brand: String,
  category: String,
  lastName: String,
});

module.exports = mongoose.model("products", productScheme);
