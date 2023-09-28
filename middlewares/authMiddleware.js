const jwt = require("jsonwebtoken");

const User = require("../models/User.js");

const authMiddleware = async (req, res, next) => {
    const unauthorizedReponse = {
        success: false,
        message: "Unauthorized"
    };
    /**
     * 1. Verify if the token in present in request header
     * 2. Validate the token signature
     * 3. Validate the token expiry
     * 4. Match the user token with user db's token 
     */

    try {
        const auth = req.headers.authorization;

        if (!auth) {
            return res.status(401).json(unauthorizedReponse);
        }

        const token = auth.split(' ')[1];
        if (!token) {
            return res.status(401).json(unauthorizedReponse);
        }

        jwt.verify(token, process.env.JWT_SECRET_KEY);

        const tokenData = jwt.decode(token);
        const tokenExpiry = tokenData.exp;
        const now = Date.now();

        if (tokenExpiry <= now) {
            return res.status(401).json(unauthorizedReponse);
        }

        const user = await User.findById(tokenData.userId);
        if (!user) {
            return res.status(401).json(unauthorizedReponse);
        }

        if (token !== user.token) {
            return res.status(401).json(unauthorizedReponse);
        }

        req.user = user;

        next();
    } catch (err) {
        console.log(err)
        res.status(401).json(unauthorizedReponse);
    }


};

module.exports = authMiddleware;