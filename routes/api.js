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
  const data = await Workout.updateOne({_id: req.params.id }, {
    $push: {
      exercises: req.body,
    },
  }).catch((err) => res.json(err));
  res.json(data);
    
});

// /api/workouts
router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// /api/workouts/range
router.get("/workouts/range", async function(req, res){
    try {
      const data = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
      ])
      .sort({'_id': -1})
      .limit(7)
      console.log(data)
      res.json(data);
    }catch (err) {
        console.log(err);
        res.status(500).send(err);

}});

module.exports = router;

