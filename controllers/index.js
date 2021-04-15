const router = require("express").Router();
const path = require("path");
const viewDir = path.join(__dirname, "../views");

router.use("/", require("./view"));
router.use("/api", require("./api"));

module.exports = router;