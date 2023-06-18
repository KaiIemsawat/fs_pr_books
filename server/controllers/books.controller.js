const Book = require("../models/books.model");

module.exports.getAllBooks = (req, resp) => {
    Book.find()
        .then((allBooks) => {
            resp.json(allBooks);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.getBookById = (req, resp) => {
    console.log(req.params);
    Book.findById({ _id: req.params.id })
        .then((oneBook) => {
            resp.json(oneBook);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.addBook = (req, resp) => {
    Book.create(req.body)
        .then((newBook) => {
            resp.status(201).json(newBook);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.editBook = (req, resp) => {
    console.log(req.params);
    Book.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((updateBook) => {
            resp.json(updateBook);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};

module.exports.deleteBookById = (req, resp) => {
    Book.deleteOne({ _id: req.params.id })
        .then((resu) => {
            /* 
            // To have status 204 (No content) fire since there the id is no longer existing
            // resu.deletedCount === 1
            //     ? resp.json(resu)
            //     : resp.status(204).json(resu); 
            */

            resp.json(resu);
        })
        .catch((err) => {
            resp.status(400).json(err);
        });
};
