const { Order } = require("../models/orders");

const createOrder = async (req, res) => {
  try {
    console.log(req.body);
    const newOrder = await Order.create({ ...req.body });
    res
      .status(201)
      .json({ msg: "order created successfully", order: newOrder });
  } catch (err) {
    console.log("error in creating order", err);
    res.status(500).json({ message: "failed to create order" });
  }
};

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email: email }).sort({ createdAt: -1 });
    if(!orders){
       return res.status(404).json({message: "order not found"});
    }
    res.status(200).json(orders);
  } catch (error) {
    console.log("Error in getting error", error);
    res.status(500).json({ message: "failed to get orders" });
  }
};

module.exports = { createOrder, getOrderByEmail };
