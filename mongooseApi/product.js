const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: String,
  price: String,
  brand: String,
  category: String,
});

module.exports = mongoose.model("products", productScheme);
