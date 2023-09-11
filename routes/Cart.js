app.get(`/api/${apiVersion}/cart`, (req, res) => {
    res.json({
        success: true,
        message: "Dummy cart API"
    })
});