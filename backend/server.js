import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./model/bookModel.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});

// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log("App connected to database");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
