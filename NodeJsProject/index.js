const express = require("express");
const app = express();
const Users = require("./login");
const cors = require("cors");

const token = require("jsonwebtoken");
const tokenKey = "e-comm";

require("./config");

app.use(express.json());
app.use(cors());

app.post("/register", async (request, response) => {
  let user = new Users(request.body);
  let result = await user.save();
  result = result.toObject();
  delete result.password;
  delete result.confirmPassword;

  token.sign({ result }, tokenKey, { expiresIn: "2h" }, (error, token) => {
    if (error) {
      response.send({ result: "Something went wrong" });
    }
    response.send({ result, token: token });
  });
});

app.post("/login", async (request, response) => {
  if (request.body.email && request.body.password) {
    let user = await Users.findOne(request.body).select("-password");

    if (user) {
      token.sign({ user }, tokenKey, { expiresIn: "2h" }, (error, token) => {
        if (error) {
          response.send({ result: "Something went wrong" });
        }
        response.send({ user, token: token });
      });
    } else {
      response.send({ message: "No User Found" });
    }
  } else {
    response.send({ message: "No User" });
  }
});

app.listen(4500);
