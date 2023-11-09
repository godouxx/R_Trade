const router = require("express").Router();
const trades = require("./trades.routes");
const users = require("./users.routes");
const auth = require("./auth.routes");

router.use("/trades", trades);
router.use("/users", users);
router.use("/auth", auth);

router.get("/", (req, res) => {
  res.redirect("/trades");
});

module.exports = router;
