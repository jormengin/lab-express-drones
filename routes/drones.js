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

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  try {
    const droneId = await Drone.findById(id);
    res.render("drones/update-form", { droneId });
  } catch (error) {
    next(error)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;
  const { name, propellers, maxSpeed } = req.body;
  try {
    await Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed });
    res.redirect(`/drones`);
  } catch (error) {
    next(error)
  }
});

router.get('/drones/:id/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;
  try {
    await Drone.findByIdAndDelete(id);
    res.redirect(`/drones`);
  } catch (error) {
    next(error)
  }
});

module.exports = router;
