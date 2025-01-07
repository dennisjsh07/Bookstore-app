const express = require("express");
const router = express.Router();
const {
  PostBook,
  getAllBooks,
  getSinglebook,
  updateBook,
  deleteSingleBook
} = require("../controllers/book");
const verifyAdminToken = require("../middleware/verifyAdminToken");

// create books...
router.post("/create-book",verifyAdminToken, PostBook);

// get all books...
router.get("/", getAllBooks);

// get a single book...
router.get("/:id", getSinglebook);

// update book data...
router.put("/edit/:id",verifyAdminToken, updateBook);

// delete book data...
router.delete("/delete/:id",verifyAdminToken, deleteSingleBook)

module.exports = router;
