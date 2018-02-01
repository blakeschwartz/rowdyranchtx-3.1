
import express from 'express'
import ArticleRouter from './ArticleRouter'
import NewsRequestHandler from './NewsRequestHandler'
import GalleryRouter from './GalleryRouter'
import LivestockDBRouter from './livestock'


export default class APIRouter { 

	constructor(options) {
		this.logger = options.logger
	}

	routes = () => {

		let router = express.Router()

		let articleRouter = new ArticleRouter({logger: this.logger})
		router.param( 		'id', 				articleRouter._param)
		router.get( 		'/articles', 		articleRouter._getAll)
		router.get( 		'/articles/:id', 	articleRouter._get)
		router.put( 		'/articles/:id', 	articleRouter._put)
		router.delete( 		'/articles/:id', 	articleRouter._delete)


		let news = new NewsRequestHandler({logger: this.logger})
		router.get( 		'/news', 			news._getAll)
		router.get( 		'/news/:id', 		news._get)


		//router.use '/articles', ArticleRouter
		//router.use '/news', NewsRouter
		router.use( 		'/gallery', 		GalleryRouter)
		router.use( 		'/ldb', 			LivestockDBRouter)

		return router
	}
}