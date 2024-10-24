import { Book } from "../model/bookModel.js";

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const title = req.body.title;
    const author = req.body.author;
    const publishYear = req.body.publishYear;
    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Send all required fieds: title, author, publishYear",
      });
    }
    const newBook = { title: title, author: author, publishYear: publishYear };
    const book = await Book.create(newBook);
    return res.status(200).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const title = req.body.title;
    const author = req.body.author;
    const publishYear = req.body.publishYear;

    if (!title || !author || !publishYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }
    const id = req.params.id;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(400).json({ message: "Book not found" });
    }
    return res.status(200).json({ message: "Book updated successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(400).json({ message: "Can't not delete" });
    }
    return res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
};

export { getAllBooks, getBookById, createBook, updateBook, deleteBook };
