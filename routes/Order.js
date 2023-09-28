const express = require("express");

const orderController = require("../controllers/Order.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = new express.Router();
// roleMiddleware.permissions("ADMIN") // Role based middleware
router.post("/create", authMiddleware, orderController.createOrder);

router.get("/list", orderController.listOrder);

module.exports = router;