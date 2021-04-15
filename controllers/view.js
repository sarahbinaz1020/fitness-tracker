const router = require("express").Router();
const path = require("path");
const viewDir = path.join(__dirname, "../views");

// /api/workouts
router.get("/workouts", function(req, res) {
    // res.sendFile(path.join(viewDir, "index.html"));
})

// /api/workouts/:id
router.put("/workouts/:id", function(req, res) {
    // res.sendFile(path.join(viewDir, "index.html"));
})

// /api/workouts
router.post("/workouts", function(req, res) {
    // res.sendFile(path.join(viewDir, "index.html"));
})

// /api/workouts/range
router.get("/workouts/range", function(req, res) {
    // res.sendFile(path.join(viewDir, "index.html"));
})

module.exports = router;