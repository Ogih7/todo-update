const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDb = require('./DB/DB')
require("dotenv").config();
const app = express();

app.get("/", () => {
  res.status(200).send("Hello world");
});

app.use("/", require("./routes/todo"));
connectDb();

const port = process.env.port;
app.listen(port, () => {
  console.log("listening on port 3000");
});
