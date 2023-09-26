const User = require("../models/User");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    // console.log(req.body);
    const userData = {
        "name": req.body.name,
        "email": req.body.email,
        "address": req.body.address,
        "phone": req.body.phone,
    };

    const plainTextPassword = req.body.password;
    /**
     * 1. Import bcrypt
     * 2. Generate salt
     * 3. Hash the password
     */

    const salt = await bcrypt.genSalt(10);
    console.log("SALT", salt);

    const hashedPassword = await bcrypt.hash(plainTextPassword, salt);
    console.log("HASH", hashedPassword);
    userData.password = hashedPassword;
    try {
        const user = new User(userData);
        const newUser = await user.save();
        res.json({
            success: true,
            message: "User registered successfully. User ID "
        })
    } catch (err) {
        console.log("ERROR", err);
        res.status(404).json({
            success: false,
            message: "An error occured"
        })
    }
};

const loginUser = (req, res) => {
    res.json({
        success: true,
        message: "Dummy Login API"
    })
};

const editUser = async (req, res) => {
    const userId = req.body._id;
    const updateObject = {
        // password: req.body.password
        prouctsPurchaed: req.body.prouctsPurchaed
    };
    const result = await User.findByIdAndUpdate(userId, updateObject);
    res.json({
        success: true,
        message: "User edited successfully"
    })
};

const deleteUser = async (req, res) => {
    const result = await User.findByIdAndDelete(req.body._id);
    res.json({
        success: true,
        message: "User account deleted successfully"
    })
};

const getUser = async (req, res) => {
    const users = await User
        .find({})
        .populate("prouctsPurchaed")
    res.json({
        success: true,
        result: users
    })
};

module.exports = {
    registerUser,
    loginUser,
    editUser,
    deleteUser,
    getUser
}