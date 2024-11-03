import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/bookRoutes.js";
import cors from "cors";
import os from "os";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", async (req, res) => {
  res.json({ message: "Success", hostname: os.hostname() });
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
