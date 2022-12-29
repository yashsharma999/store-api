import dotenv from "dotenv";
import Product from "./models/product.js";
import connectDB from "./db/connect.js";
import jsonProducts from "./products.json" assert { type: "json" };

dotenv.config();

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Data imported...");
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
