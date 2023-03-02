const express = require("express");

require("./config");

const Products = require("./product");

const app = express();

app.use(express.json());

app.get("/search/:key", async (request, response) => {
  let data = await Products.find({
    $or: [{ name: { $regex: request.params.key } }],
  });

  response.send(data);
});

app.listen(5000);
