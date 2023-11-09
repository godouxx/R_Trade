const Trade = require("../database/models/trade.model");

exports.getTrades = () => {
  return Trade.find({}).exec();
};

exports.createTrade = (trade) => {
  const newTrade = new Trade(trade);
  return newTrade.save();
};

exports.deleteTrade = (tradeId) => {
  return Trade.findByIdAndDelete(tradeId).exec();
};

exports.getTrade = (tradeId) => {
  return Trade.findOne({ _id: tradeId }).exec();
};

exports.updateTrade = (tradeId, trade) => {
  return Trade.findByIdAndUpdate(
    tradeId,
    { $set: trade },
    { runValidators: true }
  );
};
