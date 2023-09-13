const express = require('express');
const cors = require('cors');
const responseTime = require("response-time");

const userRoutes = require("./routes/User.js");
const productRoutes = require("./routes/Product.js");
const cartRoutes = require("./routes/Cart.js");

const app = express();
const apiVersion = 'v1';



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
// app.use("/api/v1/wishlist", wishlistRoute);


// console.log(process.env.API_KEY);

const portNo = 8081;
// server.listen(8081, callbackFn);
app.listen(portNo, () => {
    console.log(`Server is up and running on port ${portNo}`)
});