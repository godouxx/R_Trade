const router = require("express").Router();
const Trade = require("../database/models/trade.model");
const {
  tradeList,
  tradeNew,
  tradeCreate,
  tradeDelete,
  tradeEdit,
  tradeUpdate,
} = require("../controllers/trades.controller");

router.get("/", tradeList);
router.get("/new", tradeNew);
router.post("/", tradeCreate);
router.get("/edit/:tradeId", tradeEdit);
router.post("/update/:tradeId", tradeUpdate);
router.delete("/:tradeId", tradeDelete);

module.exports = router;
