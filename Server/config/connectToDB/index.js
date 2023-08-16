const mongoose = require("mongoose");

module.exports = () =>
  mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => {
      console.log("Database is connected");
    })
    .catch(() => {
      console.log("Database connection faild");
      process.exit(1);
    });
