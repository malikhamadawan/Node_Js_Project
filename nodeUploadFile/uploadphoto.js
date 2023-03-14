
const mongoose = require("mongoose");
const fs = require("fs");

const BASE_URL =
  "mongodb+srv://hamad:hamadjaved456@cluster0.xdzmjvw.mongodb.net/e-commerce";

// Connect to MongoDB
mongoose.connect(BASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for your collection
const photoSchema = new mongoose.Schema({
  name: String,
  data: Buffer,
});

// Create a model for your collection
const Photo = mongoose.model("Photo", photoSchema);

// Read the photo file as a buffer
const photoData = fs.readFileSync("path/to/photo.jpg");

// Create a new photo document and save it to the database
const newPhoto = new Photo({
  name: "My Photo",
  data: photoData,
});
newPhoto.save((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Photo uploaded successfully!");
  }
});
