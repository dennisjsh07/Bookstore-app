const express = require("express");
const router = express.Router();
const {
  PostBook,
  getAllBooks,
  getSinglebook,
  updateBook,
  deleteSingleBook
} = require("../controllers/book");

// create books...
router.post("/create-book", PostBook);

// get all books...
router.get("/", getAllBooks);

// get a single book...
router.get("/:id", getSinglebook);

// update book data...
router.put("/edit/:id", updateBook);

// delete book data...
router.delete("/delete/:id", deleteSingleBook)

module.exports = router;
