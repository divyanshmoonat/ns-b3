const Order = require("../models/Order.js");

const createOrder = async (req, res) => {

    const orderData = {
        ...req.body
    };
    orderData.user = req.user._id;

    const order = new Order(orderData);
    const result = await order.save();
    console.log(result._id);
    res.json({
        success: true,
        message: "Order placed successfully, your order Id is " + result._id
    })
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