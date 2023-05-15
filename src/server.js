import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
// import passport from "passport";

// import { router } from "./routes/index.js";
// import { passportMiddelWare } from "./middlewares/passport.js";

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

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

// app.use(passport.initialize());
// passportMiddelWare(passport);
//
// app.use(router);
