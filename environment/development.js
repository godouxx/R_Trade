const path = require('path');

module.exports = {
    dbUrl: "mongodb+srv://tleray:rtrade@rtrade.aysseip.mongodb.net/Rtrade?retryWrites=true&w=majority",
    cert : path.join(__dirname, '../ssl/local.crt'),
    key : path.join(__dirname, '../ssl/local.key'),
}