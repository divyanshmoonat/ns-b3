const getCart = (req, res) => {
    res.json({
        success: true,
        message: "Dummy cart API"
    })
};

module.exports = {
    getCart
}