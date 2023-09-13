const express = require("express");

const proudctController = require("../controllers/Product");

const router = new express.Router();

router.get(`/list`, proudctController.productsList);

router.get(`/details/:productId`, proudctController.productDetails);

router.put(`/replace`, proudctController.productReplace);

router.delete(`/delete`, proudctController.productDelete);

router.post("/", proudctController.createProduct)


module.exports = router;