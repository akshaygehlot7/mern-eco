const mongoose = require("mongoose");
require("dotenv").config();

// console.log('MONGO_URI:', process.env.MONGO_URI);

// const DB  = process.env.MONGO_URI;

DB =
  "mongodb+srv://akshaygehlot:akshaygehlot003@cluster0.vopkzgq.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0";
if (!DB) {
  console.error('MONGO_URI is not defined. Please check your .env file.');
  process.exit(1);
}

const connectDatabase = () => {
  //   console.log('MONGO_URI:', DB);
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
    // .catch((error) => {
    //   console.error(`Error connecting to MongoDB: ${error.message}`);
    //   process.exit(1); // Exit the process with failure
    // });
};
module.exports = connectDatabase;
