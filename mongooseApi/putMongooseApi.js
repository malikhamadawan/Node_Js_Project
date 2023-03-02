const express = require("express");

require("./config");

const Products = require("./product");

const app = express();

app.use(express.json());

app.put("/update/:_id", async (request, response) => {
  console.log("request", request.params);

  let data = await Products.updateOne(request.params, { $set: request.body });

  response.send(data);
});

app.listen(4500);
