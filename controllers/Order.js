const Order = require("../models/Order.js");

const createOrder = async (req, res) => {
    console.log(req.body)
    const order = new Order(req.body);
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