
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

export default class GalleryService {

  constructor() {
    this.galleryDB = []
    this.meta = {}
  }

  load = () => {
    this.galleryDB = []

    try {
      let DB = yaml.safeLoad(fs.readFileSync("gallery/galleryDB.yaml", "utf8"))
      this.galleryDB = DB.gallery
      this.meta = DB.meta
      // console.log(JSON.stringify(DB, null, 4))
    }
    catch (e) {
      console.log(e)
    }

    this.galleryDB.forEach((item) => {
      // console.log(item)

      item.image = path.join(this.meta.imageBasePath, item.image)

      if (!item.thumbnail) {
        // console.log("none")
        item.thumbnail = item.image
      }
      else {
        item.thumbnail = path.join(this.meta.imageBasePath, item.thumbnail)
      }
    })
    // console.log(this.galleryDB);
  }

  getPhotos = () => {
    // console.log JSON.stringify(this.galleryDB, null, 4)
    return this.galleryDB
  }

  watch = () => {
    fs.watch('gallery', (eventType, filename) => {
      //if filename
      //   console.log(`gallery: ${filename}`);

      this.load()
    })
  }
}