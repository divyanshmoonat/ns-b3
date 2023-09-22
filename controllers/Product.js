const Product = require("../models/Product.js");

const productsList = async (req, res) => {
    const pageNo = +req.query.pageNo;
    const pageSize = +req.query.pageSize;
    const products = await Product.find({})
        .skip((pageNo - 1) * pageSize)
        .limit(pageSize)
    // console.log(products);
    res.json({
        success: true,
        results: products
    });
    // res.send("Product list API");
};

const productDetails = async (req, res) => {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    res.json({
        success: true,
        result: product
    });
};

const productReplace = (req, res) => {
    //ToDo : put your logic here
    res.json({
        success: true,
        message: "Product Replace Dummy API from Controller"
    });
};

const productDelete = (req, res) => {
    res.status(404).json({
        success: true
    })
};

const createProduct = (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: "Create product API"
    });
};

module.exports = {
    productsList,
    productDetails,
    productReplace,
    productDelete,
    createProduct
}