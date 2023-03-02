const mongoose = require("mongoose");

const BASE_URL =
  "mongodb+srv://hamad:hamadjaved456@cluster0.xdzmjvw.mongodb.net/e-commerce";

const main = async () => {
  await mongoose.connect(BASE_URL);

  const ProductScheme = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
  });
  const ProductModal = mongoose.model("products", ProductScheme);

  let data = new ProductModal({
    name: "Hamda Javed",
    lastName: "Ali",
    email: "Hamadali@gmail.com",
  });

  let result = await data.save();
};

main();
