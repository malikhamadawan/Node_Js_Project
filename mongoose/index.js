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
  const ProductModal = mongoose.model("product", ProductScheme);

  let data = new ProductModal({
    name: "Hassan Javed",
    lastName: "Javed",
    email: "Hassanali@gmail.com",
  });

  let result = await data.save();
};

main();
