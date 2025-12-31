// file 9 
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

module.exports = async (req, res, next) => {
  try {
    let token;

    // check if token exists in header
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // no token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized, token missing"
      });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // get user from token
    req.user = await User.findById(decoded.id).select("-password");

    next(); // allow request to continue

  } catch (err) {
    return res.status(401).json({
      success: false,
      message: "Not authorized, token invalid"
    });
  }
};
