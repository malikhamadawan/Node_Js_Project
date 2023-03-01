const dbConnect = require("./mongoconnection");

const mongodbInsert = async () => {
  const connect = await dbConnect();

  const result = await connect.insertMany([
    {
      name: "m 40",
      brand: "vivo",
      price: 300,
      category: "tablet",
    },
    {
      name: "m 50",
      brand: "nokia",
      price: 300,
      category: "tablet",
    },
  ]);
  if (result.acknowledged) {
    console.log("result inserted");
  }
};

mongodbInsert();
