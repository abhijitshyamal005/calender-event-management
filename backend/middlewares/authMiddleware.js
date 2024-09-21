const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const protect = async (req, res, next) => {
    let token;

    // Check if the Authorization header has a Bearer token
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Get token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify token using the JWT_SECRET
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Fetch the user based on the decoded token ID, excluding the password field
            req.user = await User.findById(decoded.id).select("-password");

            // Call the next middleware or route handler if authentication is successful
            next();
        } catch (error) {
            console.error("Token verification failed", error);
            res.status(401).json({ message: "Not authorized, token failed" });
        }
    } else {
        // If no token is found in the header, send an error response
        res.status(401).json({ message: "Not authorized, no token" });
    }
};

module.exports = { protect };
