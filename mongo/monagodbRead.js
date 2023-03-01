const dbConnect = require("./mongoconnection");

const main = async () => {
  let data = await dbConnect();
  data = await data.find().toArray();

  console.log("data", data);
};

main();
