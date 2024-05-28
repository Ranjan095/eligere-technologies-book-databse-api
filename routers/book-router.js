let express = require("express");
const { BookModel } = require("../models/book-model");
let bookRouter = express.Router();

/** API for get books */
bookRouter.get("/books", async (req, res) => {
  try {
    let books = await BookModel.find();

    return res.status(200).send({
      totalBooks: books.length,
      data: books,
    });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

/** API for create books */
bookRouter.post("/books/create", async (req, res) => {
  try {
    let { title, author, isbin, publicationDate } = req.body;

    if (!title || !author || !isbin || !publicationDate) {
      return res.status(400).send({
        error:
          "title,author,isbin and publicationDate is required so please check it",
      });
    }

    let newBook = await BookModel.create({
      title,
      author,
      isbin,
      publicationDate,
    });
    await newBook.save();

    if (!newBook) {
      return res
        .status(400)
        .send({ error: "Somthing went wrong while creating book" });
    }

    return res.status(200).send({
      message: "book created successfully",
      data: newBook,
    });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

/** API for update books */
bookRouter.patch("/books/update", async (req, res) => {
  try {
    let { bookId } = req.query;
    let { title, author, isbin, publicationDate } = req.body;

    let updatedBook = await BookModel.findByIdAndUpdate(
      { _id: bookId },
      {
        title,
        author,
        isbin,
        publicationDate,
      },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(400).send({ error: "Book not found" });
    }

    return res.status(200).send({
      updatedBook,
    });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

// API for delete
bookRouter.delete("/books/delete", async (req, res) => {
  try {
    let { bookId } = req.query;

    let deleteBook = await BookModel.findByIdAndDelete({ _id: bookId });

    if (!deleteBook) {
      return res.status(400).send({ error: "Book not found" });
    }

    return res.status(200).send({
      message: "book deleted successfully",
    });
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

module.exports = { bookRouter };
