const getCart = (req, res) => {
    console.log(req.body)
    res.json({
        success: true,
        message: "Dummy cart API"
    })
};

module.exports = {
    getCart
}