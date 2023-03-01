const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://hamad:hamadjaved456@cluster0.xdzmjvw.mongodb.net/test:27017";

const client = new MongoClient(url);

const dbConnect = async () => {
  let response = await client.connect();

  let datebase = response.db("e-commerce");

  // let collection = datebase.collection("product");

  return datebase.collection("product");

  // let result = await collection.find({}).toArray();

  // console.log("result", result);
};

module.exports = dbConnect;
