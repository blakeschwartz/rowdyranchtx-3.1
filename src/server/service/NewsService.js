
import createDebug from 'debug'
import fs from 'fs'
import marked from 'marked'
import {find, propEq} from 'ramda'

let debug = createDebug('news')


export default class NewsService {

  constructor(options) {
    debug("NewsService starting.")

    this.logger = options.logger
    this.news = []
  }


  loadArticles = () => {
    //debug "loading news articles." 
    //this.logger.info("loading news articles.")
    
    let newNews = []
    try {
      let files = fs.readdirSync('news')
      files = files.filter((file) => file.substr(-8) == '.news.md')
      files.sort().reverse()
      files = files.slice(0, 5)

      files.forEach((file) => {
        let txt = fs.readFileSync(`news/${file}`, "utf8")
        let article = {}
        article.id = file.substr(0, file.length - 8)
        article.text = marked(txt)
        newNews.push(article)
      })

      this.news = newNews
    }
    catch (e) {
      this.logger.error(e)
    }
  }


  getArticles = () => {
    debug("get all news articles.")
    return this.news
  }

  getArticle = (id) => {
    debug(`get news article id: ${id}`)
    return find(propEq('id', id), this.news)
  }


  watch = () => {
    fs.watch('news', (eventType, filename) => {
      debug("news 'watch' fired.")
      // if (filename) {
      //    console.log(`news: ${filename}`);
      // }

      this.loadArticles()
    })
  }
}


/*
  loadArticles: =>
    try
      files = fs.readdirSync "news"
      files = files.filter (file) => file.substr(-8) is '.news.md'
      files.sort().reverse()
      files = files.slice(0, 5)

      @articles.length = 0

      files.forEach (file) => 
        txt = fs.readFileSync "news/#{file}", "utf8"
        html = marked txt
        @articles.push(html)
    catch e
      console.log e


  getArticles: =>
    news = []
    try
      files = fs.readdirSync 'news'
      files = files.filter (file) => file.substr(-8) is '.news.md'
      files.sort().reverse()
      files = files.slice 0, 5

      @articles.length = 0

      files.forEach (file) =>
        txt = fs.readFileSync "news/#{file}", "utf8"
        article = {}
        article.id = file.substr(0, file.length - 8)
        article.text = marked txt
        news.push article
    catch e
      console.log e
    
    news


  watch: =>
    fs.watch 'news', (eventType, filename) =>
      # if (filename) {
      #    console.log(`news: ${filename}`);
      # }

      @loadArticles()
*/

