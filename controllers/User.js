const registerUser = (req, res) => {
    res.json({
        success: true,
        message: "Dummy Registration API"
    })
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