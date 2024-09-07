import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js";
import cors from "cors";

const app = express();

// Convert JSON string in payload to JSON object and parse to req.body
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.use("/books", booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
