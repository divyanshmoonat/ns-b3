const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const jwtSecretKey = process.env.JWT_SECRET_KEY;
console.log("JWTKEY", jwtSecretKey);

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

const loginUser = async (req, res) => {
    // console.log(req.body);
    /**
     * 1. Verify if the user is present in DB or not
     * 2. If user is present in DB, match the password (req.body and db's password)
     * 3. 
     */
    const userFromDb = await User.findOne({
        email: req.body.email
    });

    const now = Date.now();
    const oneHrInMs = 24 * 60 * 60 * 1000;


    const jwtPayload = {
        subject: "www.ecomm.com",
        iat: now,
        exp: now + oneHrInMs,
        userId: userFromDb._id,
        email: userFromDb.email,
        role: "INSTRUCTOR"
    };

    const token = jwt.sign(jwtPayload, jwtSecretKey);
    // console.log(token);

    if (!userFromDb) {
        return res.status(400).json({
            success: false,
            message: "Inavlid username or password"
        })
    }
    // console.log(userFromDb)
    const hashedPassword = userFromDb.password;
    const plainTextPassword = req.body.password;

    const isPasswordValid = await bcrypt.compare(plainTextPassword, hashedPassword);
    if (!isPasswordValid) {
        return res.status(400).json({
            success: false,
            message: "Inavlid username or password"
        })
    }
    // console.log(isPasswordValid)
    // console.log(userFromDb)
    res.setHeader('my-new-header', "123");
    await User.findByIdAndUpdate(userFromDb._id, { token });
    res.json({
        success: true,
        message: "User logged in successfully",
        token: token
    })
};

const editUser = async (req, res) => {
    const userId = req.user._id;
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

const logoutUser = async (req, res) => {
    await User.findByIdAndUpdate(req.user._id, { token: "" });
    res.json({
        success: true,
        message: "User logged out successfully"
    });
};

const uploadProfilePicture = async (req, res) => {
    console.log(req.file.path);
    res.json({
        success: true,
        messge: "Profile picture updated successfully"
    })
};

module.exports = {
    registerUser,
    loginUser,
    editUser,
    deleteUser,
    getUser,
    logoutUser,
    uploadProfilePicture
}