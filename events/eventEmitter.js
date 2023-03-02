const express = require("express");

const EventEmitter = require("events");

const app = express();

app.use(express.json());

const events = new EventEmitter();

let count = 0;

events.on("countapi", (request, response) => {
  count++;
  console.log("event called", count);
});

app.post("", (request, response) => {
  response.send(events.emit("countapi").valueOf());
});

app.listen(4500);
