const express = require("express");
const portfolioCtrl = require("../controllers/portfolio");
const router = express.Router();

//book router
router.post("", bookCtrl.savePortfolio);

router.get("", bookCtrl.getPortfolios);

// router.patch("/:id", bookCtrl.updateBook);

// router.delete("/:id", bookCtrl.deleteBook);

module.exports = router;
