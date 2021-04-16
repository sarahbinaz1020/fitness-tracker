const router = require("express").Router();
const path = require("path");
const viewDir = path.join(__dirname, "../views");

router.get("/", function(req, res) {
    res.sendFile(path.join(viewDir, "index.html"));

});

router.post("/exercise", function(req, res) {
    res.sendFile(path.join(viewDir, "exercise.html"));
    res.json(workout)
});

router.post("/stats", function(req, res) {
    res.sendFile(path.join(viewDir, "stats.html"));
});

module.exports = router;