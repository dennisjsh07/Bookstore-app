const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db/index");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const bookRouter = require("./routes/book");
const orderRouter = require("./routes/order");
const userRouter = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/book", bookRouter);
app.use("/order", orderRouter);
app.use("/admin", userRouter);


app.listen(PORT, () => {
  console.log("app running on port 5000");
});
