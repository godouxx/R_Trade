const mongoose = require("mongoose");
const env = require(`../environment/${process.env.NODE_ENV}`);
exports.clientPromise = mongoose
  .connect(
    "mongodb+srv://tleray:rtrade@rtrade.aysseip.mongodb.net/Rtrade?retryWrites=true&w=majority"
  )
  .catch((err) => console.log(err));