import express from "express";
import { Book } from "../model/bookModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const title = req.body.title;
    const author = req.body.author;
    const publishYear = req.body.publishYear;
    if (!title || !author || !publishYear) {
      res.status(400).send({
        message: "Send all required fieds: title, author, publishYear",
      });
    }
    const newBook = { title: title, author: author, publishYear: publishYear };
    const book = await Book.create(newBook);
    console.log(book);
    return res.status(200).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const publishYear = req.body.publishYear;

  if (!title || !author || !publishYear) {
    res.status(400).send({
      message: "Send all required fields: title, author, publishYear",
    });
  }
  const id = req.params.id;
  const result = await Book.findByIdAndUpdate(id, req.body);
  if (!result) {
    res.status(400).json({ message: "Book not found" });
  }
  res.status(200).json({ message: "Book updated successfully" });
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      res.status(400).json({ message: "Can't not delete" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

export default router;
