const mongoose = require("mongoose");

const userSchema = {
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    prouctsPurchaed: [
        { type: mongoose.Types.ObjectId, ref: 'products' }
    ],
    token: {
        type: String,
        default: ""
    }
};

const User = mongoose.model("users", userSchema);

module.exports = User;