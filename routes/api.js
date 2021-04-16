const router = require("express").Router();
const { Workout } = require("../models");

// /api/workouts
router.get("/workouts", async function (req, res) {
    try {
      const data = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ]);
      res.json(data);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

// /api/workouts/:id
router.put("/workouts/:id", async function(req, res){
    try{
        const data = await Workout.updateOne(req.body, {
            where: {
                id: req.params.id,
            },
        })
        res.json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
    
});

// /api/workouts
router.post("/workouts", async function(req, res){
    try {
        const data = await Workout.create(req.body);
        res.json(data);
    }catch (err) {
        console.log(err);
        res.status(500).send(err);
      }
});

// /api/workouts/range
// router.get("/workouts/range", async function(req, res){
//     try {
//       Workout.find({})
//       .sort({'date': -1})
//       .limit(7)
//     }catch (err) {
//         console.log(err);
//         res.status(500).send(err);

// });

module.exports = router;

