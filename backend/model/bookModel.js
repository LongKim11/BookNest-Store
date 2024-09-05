import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: {
      type: String,
      require: true,
    },
    publishYear: { type: Number, require: true },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

export { Book };
