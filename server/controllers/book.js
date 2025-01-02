const { Book } = require("../models/books");
const { createBook } = require("../types");

const PostBook = async (req, res) => {
  try {
    const parsedPayload = createBook.safeParse(req.body);
    if (!parsedPayload.success) {
      console.log(parsedPayload.error.issues);
      res.status(411).json({ msg: "wrong inputs" });
      return;
    }
    const newBook = await Book.create({ ...req.body });
    res.status(201).json({ msg: "book created successfully", book: newBook });
  } catch (error) {
    console.log("error in creating book", error);
    res.status(500).json({ msg: "failed to create book" });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ newPrice: -1 });
    res.status(200).json(books);
  } catch (error) {
    console.log("error in displaying all books", error),
      res.status(200).json({ msg: "failed to display all books" });
  }
};

const getSinglebook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ msg: "book not found" });
      return;
    }
    res.status(200).json(book);
  } catch (error) {
    console.log("error in getting single book", error);
    res.status(500).json({ msg: "failed to get the required book" });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body });
    if (!updatedBook) {
      res.status(404).json({ msg: "Book not found to update" });
      return;
    }
    res.status(200).json({ msg: "Book updated succssfully", updatedBook });
  } catch (error) {
    console.log("error in updating book", error);
    res.status(500).json({ msg: "failed to update book" });
  }
};

const deleteSingleBook = async (req, res) => {
    try{
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook){
            res.status(404).json({msg: "book not found to delete"});
            return;
        }
        res.status(200).json({msg: "Book deleted", Book: deletedBook});
    } catch(error){
        console.log("error in deleting book", error);
        res.send(500).json({msg: "failed to delete book"});
    }
};

module.exports = {
  PostBook,
  getAllBooks,
  getSinglebook,
  updateBook,
  deleteSingleBook,
};
