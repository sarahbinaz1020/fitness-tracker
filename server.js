const express = require("express");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

app.use(require("./routes"));

app.listen(PORT, () =>
console.log(`App listening on http://localhost: ${PORT}`)
); 