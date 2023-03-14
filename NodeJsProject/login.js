const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmPassword: String,
});
module.exports = mongoose.model("users", loginSchema);
