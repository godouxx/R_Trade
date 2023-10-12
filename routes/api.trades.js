const router = require("express").Router();
const Trades = require("../database/models/trade.model");

router.post("/", (req, res) => {
  const body = req.body;
  console.log(body);
  const newTrade = new Trades(body);
  newTrade
    .save()
    .then((newTrade) => res.redirect("/"))
    .catch((err) => {
      console.error(err);
      const errors = Object.keys(err.errors).map(
        (key) => err.errors[key].message
      );
      res.status(400).render("trades/trade-form", { errors });
    });
});

module.exports = router;
