const express = require("express");

require("./config");

const Products = require("./product");

const app = express();

app.use(express.json());

app.post("/create", async (request, response) => {
  let data = new Products(request.body);
  let result = await data.save();

  response.send(result);
});

app.listen(5000);
