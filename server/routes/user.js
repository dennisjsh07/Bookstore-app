const express = require("express");
const { adminLogin } = require("../controllers/user");
const router = express.Router();

// admin login... 
router.post("/adminLogin", adminLogin);

module.exports = router;
