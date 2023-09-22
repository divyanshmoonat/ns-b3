const mongoose = require("mongoose");

const productsSchema = {
    id: {
        type: Number,
    },
    title: {
        type: String,
        required: true
    },
    descripton: {
        type: String,
        default: ""
    },
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number
    },
    rating: {
        type: Number,
        default: 5
    },
    brand: {
        type: String,
    },
    category: {
        type: String
    },
    thumbnail: {
        type: String
    },
    images: {
        type: Array
    },
    stock: {
        type: Number,
        required: true
    }
};

const Product = mongoose.model('products', productsSchema);

module.exports = Product;