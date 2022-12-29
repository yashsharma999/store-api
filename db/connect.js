import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log(err));
};

export default connectDB;
