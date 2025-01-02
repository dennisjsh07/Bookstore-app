const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main()
  .then(() => console.log("connection to db successfull"))
  .catch((err) => console.log(err));

