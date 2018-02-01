
import express from 'express'
import GalleryService from '../service/GalleryService'

let router = express.Router()
export default router

let gallery = new GalleryService()
gallery.load()
gallery.watch()

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  let data = gallery.getPhotos()

  res.send(JSON.stringify(data, null, 4))
})
