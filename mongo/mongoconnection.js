const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://hamad:hamadjaved456@cluster0.xdzmjvw.mongodb.net/test:27017";

const client = new MongoClient(url);

const dbConnect = async () => {
  let response = await client.connect();

  let database = response.db("e-commerce");

  // let collection = datebase.collection("product");

  return database.collection("products");

  // let result = await collection.find({}).toArray();

  // console.log("result", result);
};

module.exports = dbConnect;
