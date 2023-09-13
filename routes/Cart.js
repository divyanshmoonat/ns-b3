const express = require("express");

const cartController = require("../controllers/Cart");

const router = new express.Router();

router.get(`/`, cartController.getCart);

module.exports = router;