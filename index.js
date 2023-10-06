const express = require('express');
const cors = require('cors');
const responseTime = require("response-time");
const mongoose = require("mongoose");

require("dotenv").config();

const userRoutes = require("./routes/User.js");
const productRoutes = require("./routes/Product.js");
const cartRoutes = require("./routes/Cart.js");
const orderRoutes = require("./routes/Order.js");

const logger = require("./utils/logger.js");

const app = express();
const apiVersion = 'v1';

//mongodb://host:portNo/dbName
console.log("MONGOURI", process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connection with DB established successfully");
    })
    .catch((err) => {
        console.log("ERROR CONNECTING WITH DATABASE", err);
    })

app.use(express.json()); // Middleware to access req.body in controllers
app.use(express.urlencoded()); // Middleware to access req.body when data is in the form of form-urlencoded
app.use(express.static("public_files")); // Serve files from a specific foler
app.use(cors()); // Allow all origin's requests
app.use(responseTime());
// app.use(myMiddleware);

// Connecting routes with application

app.use("/api/v1/user/", userRoutes);
app.use("/api/v1/product/", productRoutes);
app.use("/api/v1/cart", cartRoutes);
app.use("/api/v1/order", orderRoutes);
// app.use("/api/v1/wishlist", wishlistRoute);

app.use("*", (req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

// Global error handler
app.use((error, req, res, next) => {
    if (error) {
        logger.log({
            level: "info",
            message: error
        })
        // console.log("ERROR OCCURED", error);

        // Write error to the log file
    }
    res.status(error.statusCode || 500).json({
        success: false,
        msg: error.message || "Something went wrong"
    });
});


// console.log(process.env.API_KEY);

const portNo = 8081;
// server.listen(8081, callbackFn);
app.listen(portNo, () => {
    console.log(`Server is up and running on port ${portNo}`)
});