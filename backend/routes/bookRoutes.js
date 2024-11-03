import express from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  cache,
} from "../controller/bookController.js";

const router = express.Router();

router.get("/", getAllBooks);

router.get("/:id", cache, getBookById);

router.post("/", createBook);

router.put("/:id", updateBook);

router.delete("/:id", deleteBook);

export default router;
