let mongoose = require("mongoose");

let bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    isbin: {
      type: Number,
      required: true,
    },
    publicationDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let BookModel = mongoose.model("books", bookSchema);

module.exports = { BookModel };
