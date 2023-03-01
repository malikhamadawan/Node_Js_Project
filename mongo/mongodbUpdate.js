const dbConnect = require("./mongoconnection");

const mongodbUpdate = async () => {
  const connect = await dbConnect();

  let result = await connect.updateOne(
    { brand: "vivo" },
    { $set: { brand: "hamad" } }
  );

  console.log("mongodbUpdate", result);
};

mongodbUpdate();
