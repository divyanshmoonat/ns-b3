// const http = require("node:http");
const express = require('express');

// const server = http.createServer();
const app = express();
/**
 * ToDo: WHOLE APPLICATION LOGIC WILL BE WRITTEN HERE
 */

// app.use("/", (req, res) => {
//     res.send("My express server is up and running");
// });

const products = [
    {
        id: 1,
        title: "Mobile",
        qty: 100
    },
    {
        id: 2,
        title: "Laptop",
        qty: 50
    },
    {
        id: 3,
        title: "Earpohones",
        qty: 50
    },
    {
        id: 4,
        title: "Book",
        qty: 50
    },
    {
        id: 5,
        title: "TV",
        qty: 50
    },
    {
        id: 6,
        title: "Monitor",
        qty: 50
    },

];

app.get("/product-list", (req, res) => {
    res.json({
        success: true,
        results: products
    });
    // res.send("Product list API");
});

app.post("/product-list", (req, res) => {
    res.json({
        success: true
    })
});

app.get("/product-details/:productId", (req, res) => {
    const productId = req.params.productId;
    const product = products.find(p => p.id == productId);

    res.json({
        success: true,
        result: product
    });
});

const portNo = 8081;
// server.listen(8081, callbackFn);
app.listen(portNo, () => {
    console.log(`Server is up and running on port ${portNo}`)
});