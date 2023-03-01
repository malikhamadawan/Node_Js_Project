const express = require("express");

const app = express();

app.get("", (request, response) => {
  console.log(request.query.name);
  response.send("Hello Hamad how are you");
});

app.get("/status", (request, response) => {
  response.send("Hello Hamad your status is 200");
});

app.get("/about", (request, response) => {
  response.send("Hello Hamad about");
});

app.post("/post", (request, response) => {
  response.send("hello");
});

app.listen(5000);
