const dummyProductsList = [
    {
        title: "iPhone 15",
        price: 125000,
        qty: 100,
        image: "/hotel-img.webp"
    }
]

const productsList = (req, res) => {
    res.json({
        success: true,
        results: dummyProductsList
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