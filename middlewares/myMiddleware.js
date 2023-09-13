const myMiddleware = (req, res, next) => {
    console.log("My middleware called");
    req.body = {
        text: "New item added by middleware"
    }
    next();
    // res.json({
    //     success: true,
    //     message: "Request returned from middleware"
    // })
};

module.exports = myMiddleware;