const express = require("express");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000

app.use(logger("dev"));

// const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// routes
app.use(require("./controllers"));
app.use(express.static("public"));

// Mongoose User model
// const FitnessModel = require("./models/fitnessModel");


// tell Mongoose where to connect
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
