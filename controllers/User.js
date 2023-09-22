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