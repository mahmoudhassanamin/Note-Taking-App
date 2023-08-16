const express = require("express");
require("dotenv").config();
const { connectToDB } = require("./config");
const routesHandler = require("./routes");
const { CORS } = require("./middlewares");

const app = express();

app.use(express.json());

app.use(CORS);

app.use("/api", routesHandler);

app.use("*", (req, res, next) => {
  next("page not found");
});

app.use((err, req, res, next) => {
  let status, msg;
  res.status(status || 500).json({ error: msg || err });
});

connectToDB().then(() => {
  app.listen(process.env.PORT || 3001, () => {
    console.log("The server is running");
  });
});
