
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import {values, forEach, find, filter, toPairs, propEq, range} from 'ramda'
import process from 'process'


export default class ImageService {

  //constructor: (options) ->

  constructor() {
    this.dbPath = 'imgdb'
    //this.logger = options.logger

    //@logger.info "Starting ImageServer..."

    let dbFile = path.join(this.dbPath, "db/imgdb.json")
    
    //console.log(dbFile)

    // this.imgDB = yaml.safeLoad(fs.readFileSync(path.join(dbPath, "db/imgdb.yaml"), 'utf8'))
    let jsonFile = fs.readFileSync(dbFile, 'utf8')
    this.imgDB = JSON.parse(jsonFile)

    this.images = {}
    
    forEach((item) => {
      this.images[item.id] = item
    }, 
    values(this.imgDB))
    
    //console.log(this.images)
  }

  _findImageName = (name) => {
    let img = this.images[name]

    if (!img) {
      img = this.images['noimagefound']
    }
    else {
      if (img.type == 'alias') {
        img = this.images[img.name]
        if (!img) {
          img = this.images['noimagefound']
        }
      }
    }

    return img
  }

  _findImageSize = (img, size) => {
    //console.log("_findImageSize: ", img, size)

    let paths = img['paths']
    let image = paths[size]

    if (!image) {
      // resolve size

      let sizes = ['xs', 'sm', 'md', 'lg', 'xl']

      let ndx = sizes.indexOf(size)

      for (let i = ndx; i < sizes.length; i++) {
        image = paths[sizes[i]]
        if (image) {
          size = sizes[i]
          break
        }
      }

      if (!image) {
        for (let i = ndx; i >= 0; i--) {
          image = paths[sizes[i]]
          if (image) {
            size = sizes[i]
            break
          }
        }
      }
    }

    return size
  }

  findImage = (name, size) => {

    let img = this._findImageName(name)

    size = this._findImageSize(img, size)

    //console.log("New size: ", size)

    let filename = path.join(process.cwd(), this.dbPath, "img", img['paths'][size])

    //console.log(filename, size)

    return filename
  }


  findImageMeta = (name) => {

    let img = this._findImageName(name)

    //let size = this._findImageSize(img, "md")

    //console.log("New size: ", size)

    //let filename = path.join(this.dbPath, "imgdb", img['paths'][size])

    //console.log(filename, size)

    return {name: img}
  }

  getAllImageMeta = () => {
    return this.imgDB.images
  }

}
