const mongoose = require("mongoose");

const schema = mongoose.Schema;

const tradeSchema = schema({
  content: {
    type: String,
    maxlength: [140, "Trade trop long"],
    minlength: [1, "Trade trop court"],
    required: [true, "Champ requis"],
  },
});

const Trade = mongoose.model("trades", tradeSchema);

module.exports = Trade;
