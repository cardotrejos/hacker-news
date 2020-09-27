const express = require('express');
const connectDB = require("./config/db");
const app = express();
const PORT = 8080;
const getData = require("./utils/Algolia");

app.use(express.json({ extended: false }));

app.use(function (req, res, next) {

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
});

connectDB();

app.use("/api/articles", require("./routes/articles"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

getData();