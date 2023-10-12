const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://tleray:rtrade@rtrade.aysseip.mongodb.net/Rtrade?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
