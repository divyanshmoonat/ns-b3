const productsList = (req, res) => {
    res.json({
        success: true,
        results: products
    });
    // res.send("Product list API");
};

const productDetails = (req, res) => {
    const productId = req.params.productId;
    const product = products.find(p => p.id == productId);

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

const createProduct = (req,res) => {
    console.log(req.body);
    const newId = product[product.length - 1].id + 1
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