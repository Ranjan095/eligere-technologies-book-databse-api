let express = require("express");
const { BookModel } = require("../models/book-model");
const {
  getBooks,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");
const { authantication } = require("../middleware/auth");
let bookRouter = express.Router();

/** API for get books */
bookRouter.get("/books", authantication, getBooks);

/** API for create books */
bookRouter.post("/books/create", authantication, createBook);

/** API for update books */
bookRouter.patch("/books/update", authantication, updateBook);

// API for delete
bookRouter.delete("/books/delete", authantication, deleteBook);

module.exports = { bookRouter };
