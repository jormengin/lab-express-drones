const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model');
router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find({});
    res.render("drones/list", { drones });
  } catch (error) {
    next(error);
  }
});

router.get('/drones/create', (req, res, next) => {
  try {
    res.render("drones/create-form");
  } catch (error) {
    next(error)
  }
});

router.post('/drones/create', async (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
  try {
    await Drone.create({ name, propellers, maxSpeed });
    res.redirect("/drones");
  } catch (error) {
    next(error)
  }
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
