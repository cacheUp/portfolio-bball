const express = require("express");
const router = express.Router();

router.post("/api/v1/books", (req, res) => {
  const bookData = req.body;
  const book = new Book(bookData);
  book.save((err, createdBook) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(createdBook);
  });
});

router.get("/api/v1/books", (req, res) => {
  Book.find({}, (err, allBooks) => {
    if (err) {
      return res.status(422).send(err);
    }
    return res.json(allBooks);
  });
});

router.patch("/api/v1/books/:id", (req, res) => {
  const bookId = req.params.id;
  const bookData = req.body;

  Book.findById(bookId, (err, foundBook) => {
    if (err) {
      return res.status(422).send(err);
    }
    foundBook.set(bookData);
    foundBook.save(err => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json(foundBook);
    });
  });
});

router.delete("/api/v1/books/:id", (req, res) => {
  const bookId = req.params.id;
  Book.deleteOne({ _id: bookId }, (err, deletedBook) => {
    if (err) {
      return res.status(422).send(err);
    }
    return res.json({ status: "DELETED" });
  });
});

module.exports = router;
