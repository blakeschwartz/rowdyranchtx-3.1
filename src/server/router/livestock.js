
import express from 'express'
import Service from '../service/livestock/service'

let router = express.Router()
export default router

let db = new Service()

router.param('goatId', (req, res, next, id) => {
  db.getGoatById(id)
    .then((results) => {
      req.livestock = results
      next()
    })
    .catch((err) => {
      console.log(err)
    })
})


router.get('/goats', (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  let goats = db.getGoats()

  //console.log(JSON.stringify(goats, null, 4))
  goats = []  // temp code

  res.send(JSON.stringify(goats, null, 4))

  /*
  db.getGoats().then (results) ->
    res.send(JSON.stringify(results, null, 4))
  .catch (err) ->
    console.log(err)
  */
})

router.get('/goats/:goatId', (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  res.send(JSON.stringify(req.livestock, null, 4))
})

router.param('canineId', (req, res, next, id) => {
  req.livestock = db.getCanineById(id)
  next()
})


router.get('/canines', (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  let all = db.getCanines()

  res.send(JSON.stringify(all, null, 4))
})

router.get('/canines/:canineId', (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  res.send(JSON.stringify(req.livestock, null, 4))
})
