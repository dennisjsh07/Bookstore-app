const express = require("express");
const { createOrder, getOrderByEmail } = require("../controllers/order");

const router = express.Router();

// create order route...
router.post("/", createOrder);

// get all orders...
router.get("/:email", getOrderByEmail);

module.exports = router;
