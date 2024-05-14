const mongoose = require("mongoose");
const app = require("./app");
const connectDatabase = require("./config/database");
const cloudinary = require("cloudinary");
require('dotenv').config();

 const PORT = 4000
// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});
 
// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "env" });
}
const CLOUDINARY_NAME = "djai7vlif";
const CLOUDINARY_API_KEY = "918918714968734";
const CLOUDINARY_API_SECRET = "_8mhLaVOZsRKIB__eI2u9CCm9sg";

// conect to database
connectDatabase();

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const server = app.listen(https://mern-eco-dzus.onrender.com, () => {
 console.log(`server running on https://mern-eco-dzus.onrender.com`);
  // console.log(`server running on http://localhost:${PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
