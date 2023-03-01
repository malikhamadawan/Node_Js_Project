const dbConnect = require("./mongoconnection");

const mongodbDelete = async () => {
  const connect = await dbConnect();

  let result = await connect.deleteOne({ brand: "hamad" });

  console.log("mongodbUpdate", result);
};

mongodbDelete();
