const router = require("express").Router();
const api = require("./api");
const Trade = require("../database/models/trade.model");

router.use("/api", api);
router.get("/trades/new", (req, res) => {
  res.render("trades/trade-form");
});

router.get("/", (req, res) => {
  Trade.find({})
    .exec()
    .then((trades) => res.render("trades/trade-list", { trades }));
});

module.exports = router;
