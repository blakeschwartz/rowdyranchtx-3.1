
import ArticleService from '../service/ArticleService'


export default class ArticleRouter {

  constructor(options) {

    this.logger = options.logger
    //this.router = router
    this.logger.info("ArticleRequestHandler created.")

    this.articles = new ArticleService(options)
  }

  _param = (req, res, next, id) => {
    // console.log('Article --> ' + id)
    next()
  }

  _getAll = (req, res) => {

    res.setHeader('Content-Type', 'application/json')

    let all = this.articles.getArticles()

    res.send(JSON.stringify(all, null, 4))
  }

  _get = (req, res) => {

    let id = req.params.id

    res.setHeader('Content-Type', 'application/json')

    let article = this.articles.getArticle(id)

    res.send(JSON.stringify(article, null, 4))
  }

  _put = (req, res) => {
    res.end()
  }

  _delete = (req, res) => {
    res.end()
  }
}
