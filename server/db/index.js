const mongoose = require("mongoose");
require("dotenv").config();

async function main() {
  await mongoose.connect(process.env.DB_URL);
}

main()
  .then(() => console.log("connection to db successfull"))
  .catch((err) => console.log(err));

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    trending: {
      type: Boolean,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    oldPrice: Number,
    newPrice: Number,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", BookSchema);

module.exports = {
  Book,
};
