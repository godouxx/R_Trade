const router = require("express").Router();

const trades = require("./api.trades");

router.use("/trades", trades);

module.exports = router;
