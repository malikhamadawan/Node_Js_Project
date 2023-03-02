const express = require("express");

require("./config");

const Products = require("./product");

const app = express();

app.use(express.json());

app.delete("/delete/:_id", async (request, response) => {
  console.log("request", request.params);

  let data = await Products.deleteOne(request.params);

  response.send(data);
});

app.listen(4500);
