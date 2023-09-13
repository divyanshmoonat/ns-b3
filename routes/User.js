const express = require('express');

const userController = require("../controllers/User");

const router = new express.Router();

// Routing

router.post(`/register`, userController.registerUser);

router.post(`/login`, userController.loginUser);

router.patch(`/edit`, userController.editUser);


module.exports = router;