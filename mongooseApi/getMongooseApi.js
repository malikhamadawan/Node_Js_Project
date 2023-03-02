const express = require("express");

require("./config");

const Products = require("./product");

const app = express();

app.use(express.json());

app.get("/list", async (request, response) => {
  let data = await Products.find();

  response.send(data);
});

app.listen(4500);
