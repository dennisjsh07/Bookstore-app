const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
require("dotenv").config();
const jwtPassword = process.env.JWT_PASSWORD;

const adminLogin = async (req, res) => {
  const { userName, password } = req.body;
//   console.log(req.body);
  try {
    const admin = await User.findOne({ userName });
    if (!admin) {
      return res.status(404).json({ message: "admin not found" });
    }

    if (password != admin.password) {
      return res.status(403).json({ message: "invaid password" });
    }

    const token = jwt.sign(
      { id: admin._id, userName: admin.userName, role: admin.role },
      jwtPassword,
      { expiresIn: "1h" }
    );

    res.status(200).json({ messasge: "login successfull", token: token, user: {
        userName: admin.userName,
        role: admin.role
    }});
  } catch (error) {
    console.log("error in logging as admin", error);
    res.status(500).json({ message: "failed to login as admin" });
  }
};

module.exports = {
  adminLogin,
};
