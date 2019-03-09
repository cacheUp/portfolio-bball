const Portfolio = require("../models/portfolio");

exports.getPortfolios = (req, res) => {
  Portfolio.find({}, (err, allPortfolios) => {
    if (err) {
      return res.status(422).send(err);
    }
    return res.json(allPortfolios);
  });
};

exports.savePortfolio = (req, res) => {
  const PortfolioData = req.body;
  const portfolio = new Portfolio(PortfolioData);
  portfolio.save((err, createdPortfolio) => {
    if (err) {
      return res.status(422).send(err);
    }

    return res.json(createdPortfolio);
  });
};
