const mongoose = require("mongoose");

const BASE_URL =
  "mongodb+srv://hamad:hamadjaved456@cluster0.xdzmjvw.mongodb.net/e-commerce";

const updateInDB = async () => {
  await mongoose.connect(BASE_URL);

  const ProductScheme = new mongoose.Schema({
    name: String,
    lastName: String,
    email: String,
  });
  const ProductModal = mongoose.model("products", ProductScheme);

  let data = await ProductModal.updateOne(
    { name: "Hassan Javed" },
    { $set: { lastName: "Ali" } }
  );
  console.log("data", data);
};

updateInDB();
