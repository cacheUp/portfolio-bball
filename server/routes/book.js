const express = require("express");
const bookCtrl = require("../controllers/book");
const router = express.Router();

//book router
router.post("", bookCtrl.saveBook);

router.get("", bookCtrl.getBooks);

router.patch("/:id", bookCtrl.updateBook);

router.delete("/:id", bookCtrl.deleteBook);

module.exports = router;
