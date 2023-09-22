const mongoose = require("mongoose");

const orderSchema = {
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
    orderStatus: {
        type: "String",
        default: "PLACED"
    }
};

const Order = mongoose.model('orders', orderSchema);

module.exports = Order;