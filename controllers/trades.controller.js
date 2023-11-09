const {
  getTrades,
  createTrade,
  deleteTrade,
  getTrade,
  updateTrade,
} = require("../queries/trades.queries");

exports.tradeList = async (req, res, next) => {
  try {
    const trades = await getTrades();
    res.render("trades/trade", {
      trades,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.tradeNew = (req, res, next) => {
  res.render("trades/trade-form", {
    trade: {},
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.tradeCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createTrade({ ...body, author: req.user._id });
    res.redirect("/trades");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    res
      .status(400)
      .render("trades/trade-form", {
        errors,
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user,
      });
  }
};

exports.tradeDelete = async (req, res, next) => {
  try {
    const tradeId = req.params.tradeId;
    await deleteTrade(tradeId);
    const trades = await getTrades();
    res.render("trades/trade-list", { trades });
  } catch (e) {
    next(e);
  }
};

exports.tradeEdit = async (req, res, next) => {
  try {
    const tradeId = req.params.tradeId;
    const trade = await getTrade(tradeId);
    res.render("trades/trade-form", {
      trade,
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  } catch (e) {
    next(e);
  }
};

exports.tradeUpdate = async (req, res, next) => {
  const tradeId = req.params.tradeId;
  try {
    const body = req.body;
    await updateTrade(tradeId, body);
    res.redirect("/trades");
  } catch (e) {
    const errors = Object.keys(e.errors).map((key) => e.errors[key].message);
    const trade = await getTrade(tradeId);
    res
      .status(400)
      .render("trades/trade-form", {
        errors,
        trade,
        isAuthenticated: req.isAuthenticated(),
        currentUser: req.user,
      });
  }
};
