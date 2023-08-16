const mongoose = require("mongoose");
const dotenv = require("dotenv");
const DB = process.env.DATABASE;
const db = mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected With the Database, Buddy : )");
  })
  .catch((error) => {
    console.log("Failed to Connect : (");
  });

module.exports = db
