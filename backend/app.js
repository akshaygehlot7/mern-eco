const express = require("express");
const user= require("./routes/userRoutes");
const product= require("./routes/productRoute");
const order= require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require('dotenv').config();

const path = require("path");
const app = express();
// Middleware to parse JSON-encoded request bodies
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// router import
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);
// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });

app.use(express.static(path.join(__dirname, "../front-end/build")))

app.get("*", (req, res)=>{
    res.sendFile(path.resolve(__dirname, "../front-end/index.html"))
})
// Middleware error 
app.use(errorMiddleware);

module.exports = app;
