import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js";

const app = express();

// Convert JSON string in payload to JSON object and parse to req.body
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/books", booksRoute);

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
