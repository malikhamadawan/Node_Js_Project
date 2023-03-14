const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  confirmPassword: String,
});
module.exports = mongoose.model("users", registerSchema);
