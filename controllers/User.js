const User = require("../models/User");

const registerUser = async (req, res) => {
    // console.log(req.body);
    try {
        const user = new User(req.body);
        await user.save();
        res.json({
            success: true,
            message: "User registered successfully"
        })
    } catch (err) {
        console.log("ERROR", err);
        res.status(400).json({
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

const editUser = (req, res) => {
    res.json({
        success: true,
        message: "Dummy Edit user API"
    })
};

module.exports = {
    registerUser,
    loginUser,
    editUser
}