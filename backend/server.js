import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";

const app = express();

// Convert JSON string in payload to JSON object and parse to req.body
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.get("/books", async (req, res) => {
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

app.get("/books/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

app.post("/books", async (req, res) => {
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

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
