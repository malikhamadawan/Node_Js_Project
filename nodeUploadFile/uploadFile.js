const express = require("express");

const multer = require("multer");

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: (request, file, cb) => {
      cb(null, "upload");
    },
    filename: (request, file, cb) => {
      cb(null, file.fieldname + file.originalname);
    },
  }),
}).single("user_file");

app.post("/upload", upload, (request, response) => {
  response.send("File is Uploaded");
});

app.listen(4500);
