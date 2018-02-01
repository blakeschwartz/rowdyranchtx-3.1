
import express from 'express'
import ImageService from '../service/image/ImageService'


let imageService = new ImageService()

export default class ImageRouter { 

	constructor(options) {
		this.logger = options.logger
	}

	get = (req, res) => {

	  let name = req.query.nm || "noimagefound.png"
	  let size = req.query.sz || "md"

	  let filename = imageService.findImage(name, size)

	  res.sendFile(filename)
	}

	routes = () => {
		let router = express.Router()

		router.get( 			'/', 			this.get)

		return router
	}

}

