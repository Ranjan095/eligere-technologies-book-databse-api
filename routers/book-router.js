let express = require("express");
const { BookModel } = require("../models/book-model");
let bookRouter = express.Router();

bookRouter.get("/books", (req, res) => {
  return res.status(200).send({
    message: "book fetched successfully",
  });
});

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
    console.log(error.message);
  }
});

module.exports = { bookRouter };
