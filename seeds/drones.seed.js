// Iteration #1
const mongoose = require ("mongoose");
const Drone = require ("../models/Drone.model");
const MONGODB_URI = 'mongodb://localhost/lab-express-drones';
mongoose.set('strictQuery', true);

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ]; 

mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    return Drone.deleteMany();
  })
  .then(() => {
    return Drone.create(drones);
  })
  .then(createdDrones => console.log(createdDrones))
  .then(() => {
    mongoose.disconnect();
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });