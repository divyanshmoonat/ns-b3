const Order = require("../models/Order.js");

const createOrder = async (req, res, next) => {
    try {
        const orderData = {
            ...req.body
        };
        orderData.user = req.user._id;

        throw new Error("SAMPLE ERROR");
        const order = new Order(orderData);
        const result = await order.save();
        console.log(result._id);
        res.json({
            success: true,
            message: "Order placed successfully, your order Id is " + result._id
        })
    } catch (err) {
        const error = new Error("Something went wrong, please try again later");
        error.statusCode = 500;
        error.details = "Something went wrong, test error";
        next(error);
        // console.log(err);
        // res.status(400).json({
        //     success: false,
        //     message: "Bad request"
        // })
    }
};

const listOrder = async (req, res) => {
    const ordersList = await Order
        .find({})
        .populate("user");
    res.json({
        success: true,
        result: ordersList
    })
};

module.exports = {
    createOrder,
    listOrder
}