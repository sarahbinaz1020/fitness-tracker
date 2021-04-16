const router = require("express").Router;
const { Workout } = require("../models");

// /api/workouts
router.get("/workouts", async function(req, res){
    try {


        res.json(await Workout.find());
    }catch(err) {
        res.status(500).send(err);
    }
    
    
});

// /api/workouts/:id
router.put("/workouts/:id", async function(req, res){
    
    
});

// /api/workouts
router.post("/workouts", async function(req, res){
    
    
});

// /api/workouts/range
router.get("/workouts/range", async function(req, res){


});

module.exports = router;

