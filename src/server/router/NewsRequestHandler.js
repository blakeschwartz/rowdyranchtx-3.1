
import createDebug from 'debug'
import NewsService from '../service/NewsService'

let debug = createDebug('news')


export default class NewsRequestHandler {

  constructor(options) {
    this.logger = options.logger

    debug("NewsRequestHandler created.")
    
    this.news = new NewsService(options)
    this.news.loadArticles()
    this.news.watch()
  }

  _getAll = (req, res) => {
    res.setHeader('Content-Type', 'application/json')

    let data = this.news.getArticles()

    res.send(JSON.stringify(data, null, 4))
  }

  _get = (req, res) => {
    let id = req.params.id

    res.setHeader('Content-Type', 'application/json')

    let data = this.news.getArticle(id)

    res.send(JSON.stringify(data, null, 4))
  }
}