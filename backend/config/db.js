const mongoose = require("mongoose");

const database_link = process.env.MONGO_URL;
const connection = mongoose.connect(database_link);

module.exports = { connection };
