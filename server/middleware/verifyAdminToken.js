// find if the user is present and is a admin...
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
require("dotenv").config();
const jwtPassword = process.env.JWT_PASSWORD;

const verifyAdminToken = async (req, res, next) => {
  const token = req.headers.authorization;
//   console.log(token);
  try {
    if (!token) {
      res.status(403).json({ message: "Access denied : No token provided." });
    }

    const decodedToken = jwt.verify(token, jwtPassword);
    const admin = await User.findOne({ userName: decodedToken.userName });
    // console.log(admin);
    if (!admin) {
      return res.status(404).json({ message: "user not found" });
    }

    if (admin.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied - user is not admin" });
    }
    req.admin = admin;
    next();

  } catch (error) {
    console.log("admin authentication failed", error);
    res.status(500).json({message: "Access denied - Authentication failed"})
  }
};

module.exports = verifyAdminToken;
