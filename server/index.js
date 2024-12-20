const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

const bookRouter = require("./routes/book");

const app = express();

app.use(bodyParser.json());
app.use("/book", bookRouter);

app.listen(PORT, () => {
  console.log("app running on port 5000");
});
