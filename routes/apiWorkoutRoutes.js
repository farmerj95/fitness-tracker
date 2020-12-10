const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/workouts/", (req, res) => {
    db.Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(workout => {
            res.json(workout);
        }).catch((err) => {
            res.json(err);
        });
});

// Create new workout
router.post("/workouts", (req, res) => {
    db.Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        });
});

router.post("/workouts/range", (req, res) => {
    db.Workout.create({})
        .then(workout => {
            res.json(workout);
        }).catch(err => {
            res.json(err);
        })
})


// Add exercises to workout
router.put("/workouts/:id", ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        { $push: { exercises: body } },
        { new: true }
    )
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});



module.exports = router;