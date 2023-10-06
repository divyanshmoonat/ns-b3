const express = require('express');

const userController = require("../controllers/User");
const myMiddleware = require("../middlewares/myMiddleware");
const authMiddleware = require('../middlewares/authMiddleware');
const uploadFile = require("../middlewares/fileUploadMiddleware");

const router = new express.Router();

// Routing

router.post(`/register`, myMiddleware, userController.registerUser);

router.post(`/login`, userController.loginUser);

router.patch(`/edit`, authMiddleware, userController.editUser);

router.delete("/delete", userController.deleteUser);

router.get("/list", userController.getUser);

router.post("/logout", authMiddleware, userController.logoutUser);

router.post("/upload-profile-picture", uploadFile.single("profilePicture"), userController.uploadProfilePicture);

module.exports = router;