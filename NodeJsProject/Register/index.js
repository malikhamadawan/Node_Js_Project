const express = require("express");
const app = express();
const Users = require("./register");
const cors = require("cors");

require("../config");

app.use(express.json());
app.use(cors());

app.post("/register", async (request, response) => {
  let user = new Users(request.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  delete result.confirmPassword;

  response.send(result);
});

app.listen(4500);
