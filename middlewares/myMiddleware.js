const myMiddleware = (req, res, next) => {
    // console.log("My middleware called");
    next();
    // res.json({
    //     success: true,
    //     message: "Request returned from middleware"
    // })
};

module.exports = myMiddleware;