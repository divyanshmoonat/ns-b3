const express = require("express");
const router = new express.Router();

router.get(`/list`, (req, res) => {
    res.json({
        success: true,
        results: products
    });
    // res.send("Product list API");
});

router.post(`/list`, (req, res) => {
    res.json({
        success: true
    })
});

router.get(`/details/:productId`, (req, res) => {
    const productId = req.params.productId;
    const product = products.find(p => p.id == productId);

    res.json({
        success: true,
        result: product
    });
});

router.put(`/replace`, (req, res) => {
    //ToDo : put your logic here
    res.json({
        success: true,
        message: "Product Replace Dummy API"
    });
});

router.delete(`/delete`, (req, res) => {
    res.status(404).json({
        success: true
    })
});


module.exports = router;