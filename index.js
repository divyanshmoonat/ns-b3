// const http = require("node:http");
const express = require('express');

// const server = http.createServer();
const app = express();

const userRoutes = require("./routes/User.js");
const productRoutes = require("./routes/Product.js")

const apiVersion = 'v1';

// Connecting routes with application

app.use("/api/v1/user/", userRoutes);
app.use("/api/v1/product/", productRoutes);
// app.use("/api/v1/cart", cartRoutes);
// app.use("/api/v1/wishlist", wishlistRoute);

// /user/login
//     / user / register
//     / user / edit

// console.log(process.env.API_KEY);

const portNo = 8081;
// server.listen(8081, callbackFn);
app.listen(portNo, () => {
    console.log(`Server is up and running on port ${portNo}`)
});