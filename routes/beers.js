const express = require ("express");
const router = express.Router();
const controller = require('../controller/controller')

//GET a list of all beers\
router.get('/top5_beers', controller.showBeers)

//GET by id
rouder.get('/top5_beers/:id',controller.showBeersById)


// Post new beer to list
router.post('/top5_beers', controller.createBeer)

//PUT
router.put('/top5_beers/:id', controller.updateBeer)

//DELETE
router.delete('/top5_beers/:id', controller.deleteBeer)

module.exports = router