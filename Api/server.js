const mongoose = require("mongoose");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const userRouter = require("./routes/userRoutes");
const blogRouter = require("./routes/blogRoutes");

app.use(express.json());
app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/blog", blogRouter);
const connectDb = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/BlogApp");
    console.log(
      `MongoDB Connected: ${conn.connection.host} ${conn.connection.port}`
    );
  } catch (err) {
    console.log(err);
    process.exit;
  }
};
connectDb();

app.listen(5000);
