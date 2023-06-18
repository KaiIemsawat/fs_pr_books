const BooksController = require("../controllers/books.controller");
const Book = require("../models/books.model");

module.exports = (app) => {
    app.get("/api/allBooks", BooksController.getAllBooks);
    app.get("/api/getOneBook/:id", BooksController.getBookById);
    app.post("/api/addBook", BooksController.addBook);
    app.put("/api/editBook/:id", BooksController.editBook);
    app.delete("/api/deleteBookById/:id", BooksController.deleteBookById);
};
