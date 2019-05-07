const express = require("express");
const portfolioCtrl = require("../controllers/portfolio");
const router = express.Router();
const authService = require("../services/auth");

router.post(
  "",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.savePortfolio
);

router.get("", portfolioCtrl.getPortfolios);
router.get("/:id", portfolioCtrl.getPortfolioById);
router.patch(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.updatePortfolio
);

router.delete(
  "/:id",
  authService.checkJWT,
  authService.checkRole("siteOwner"),
  portfolioCtrl.deletePortfolio
);

// router.patch("/:id", bookCtrl.updateBook);

// router.delete("/:id", bookCtrl.deleteBook);

module.exports = router;
