const express = require('express');
const router = express.Router();
const car = require('./models/cars');

router.get("/cars", async (req, res) => {
  try {
    const cars = await car.find();
    res.send(cars)
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
})

router.post("/cars", async (req, res) => {
  const Car = new car({
    brand: req.body.brand,
    model: req.body.model,
    color : req.body.color,
    year: req.body.year
  });

  try {
    const newCar = await Car.save();
    res.status(201).json({ newCar });
  } catch(err) {
    return res.status(500).json({ message: err.message });
  }
})

router.delete("/cars", async (req, res) => {
  await car.deleteOne({brand: req.body.brand}, (err, result) => {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    else {
      res.status(200).json(result);
    }
  });
})

router.put("/cars/:id", async (req, res) => {
  await car.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true}, (err, result) => { 
    if (err){ 
      return res.status(500).json({ message: err.message });
    } 
    else{ 
      res.status(200).json({ result });
    } 
  }); 
})

module.exports = router;

