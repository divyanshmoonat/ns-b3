const express = require("express");

const orderController = require("../controllers/Order.js");

const router = new express.Router();

router.post("/create", orderController.createOrder);

router.get("/list", orderController.listOrder);

module.exports = router;