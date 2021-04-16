const express = require("express");
const logger = require("morgan");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

const Workout = require("./models");
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(express.static("public"));
app.use(require("./routes"));

app.listen(PORT, () =>
console.log(`App listening on http://localhost: ${PORT}`)
); 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ useNewUrlParser: true });
