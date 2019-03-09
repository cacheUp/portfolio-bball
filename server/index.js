const express = require("express");
const next = require("next");
const routes = require("../routes");
const authService = require("./services/auth");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = routes.getRequestHandler(app);
const mongoose = require("mongoose");
const config = require("./config");
const Book = require("./models/book");
const bodyParser = require("body-parser");

mongoose
  .connect(config.DB_URI, { useNewUrlParser: true })
  .then(() => console.log("database connected"))
  .catch(err => console.error(err));
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());
    server.use(bodyParser.json());

    server.post("/api/v1/books", (req, res) => {
      const bookData = req.body;
      const book = new Book(bookData);
      book.save((err, createdBook) => {
        if (err) {
          return res.status(422).send(err);
        }

        return res.json(createdBook);
      });
    });

    server.get("/api/v1/books", (req, res) => {
      Book.find({}, (err, allBooks) => {
        if (err) {
          return res.status(422).send(err);
        }
        return res.json(allBooks);
      });
    });

    server.patch("/api/v1/books/:id", (req, res) => {
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

    server.delete("/api/v1/books/:id", (req, res) => {
      const bookId = req.params.id;
      Book.deleteOne({ _id: bookId }, (err, deletedBook) => {
        if (err) {
          return res.status(422).send(err);
        }
        return res.json({ status: "DELETED" });
      });
    });

    server.get("/api/v1/secret", authService.checkJWT, (req, res) => {
      res.json(secretData);
    });

    server.get(
      "/api/v1/onlysiteowner",
      authService.checkJWT,
      authService.checkRole("siteOwner"),
      (req, res) => {
        res.json(secretData);
      }
    );

    // server.use(function(err, req, res, next) {
    //   if (err.name === "UnauthorizedError") {
    //     res
    //       .status(401)
    //       .send({ title: "Unauthorized", detail: "Unauthorized Access!" });
    //   }
    // });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.use(handle).listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
