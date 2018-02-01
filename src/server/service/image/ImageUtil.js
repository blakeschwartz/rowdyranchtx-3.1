
import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import {forEach, find, filter, toPairs, propEq, range} from 'ramda'
import process from 'process'


export default class ImageUtil {

  static findImageSize = (paths, size) => {

    let path = paths[size]
    let foundSize = null

    if (path) {
      foundSize = size
    }
    else {
      // resolve size

      let sizes = ['xs', 'sm', 'md', 'lg', 'xl']

      let ndx = sizes.indexOf(size)

      for (let i = ndx; i < sizes.length; i++) {
        path = paths[sizes[i]]
        if (path) {
          foundSize = sizes[i]
          break
        }
      }

      if (!path) {
        for (let i = ndx; i >= 0; i--) {
          path = paths[sizes[i]]
          if (path) {
            foundSize = sizes[i]
            break
          }
        }
      }
    }

    return foundSize
  }

}
