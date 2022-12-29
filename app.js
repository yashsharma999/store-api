import dotenv from "dotenv";
import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorMiddleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js";
import productsRouter from "./routes/products.js";

dotenv.config();

const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">Products Route</a>`);
});

app.use("/api/v1/products", productsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    //connect to db
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
