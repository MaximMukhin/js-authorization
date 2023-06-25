const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const routes = require("./routes");
const { requestLogger, errorLogger } = require("./middlewares/logger.js");
const errorHandler = require("./middlewares/error-handler.js");
const limiter = require("./middlewares/limiter.js");

const {
  PORT = 4002,
  MONGO_HOST,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
  MONGO_INITDB_DATABASE,
} = process.env;

const URL = `mongodb://${MONGO_HOST}:27017/${MONGO_INITDB_DATABASE || ""}`;

const app = express();

mongoose.set("strictQuery", true);
mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: MONGO_INITDB_ROOT_USERNAME,
    pass: MONGO_INITDB_ROOT_PASSWORD,
  })
  .then(() => console.log(`Connected to MongoDB port: ${PORT}`))
  .catch((err) => console.log(`DB connection error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});

app.use(limiter);
app.use(cors());
app.use(express.static("public"));
//app.use('/static', express.static(__dirname + 'public'));
app.use(express.json());
app.use(requestLogger);
app.use(routes);
app.use(errorLogger);
app.use(errorHandler);