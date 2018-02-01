
import fs from 'fs'
import marked from 'marked'
import yaml from 'js-yaml'
import { map } from 'ramda'

export default class ArticleService {

  constructor(options) {
    this.logger = options.logger

    this.logger.info("ArticleService started.")
  }

  getArticles = () => {
    let res = null

    try {
      let files = fs.readdirSync("article")
      files = files.filter((name) => name.endsWith(".yaml"))

      res = files.map((name) => {
        name = name.slice(0, name.length-5)
        let meta = yaml.safeLoad(fs.readFileSync(`article/${name}.yaml`, 'utf8'))

        if (meta.format == "html") {
          let html = fs.readFileSync(`article/${name}.html`, 'utf8')
          
          return {
            id: name,
            title: meta.title,
            text: html
          }
        }
        else {
          let txt = fs.readFileSync(`article/${name}.md`, 'utf8')
          let html = marked(txt)
          
          return {
            id: name,
            title: meta.title,
            text: html
          }
        }
      })
    }
    catch (e) {
      this.logger.error(e)
    }

    return res
  }

  getArticle = (name) => {
    try {
      let meta = yaml.safeLoad(fs.readFileSync(`article/${name}.yaml`, 'utf8'))

      if (meta.format == "html") {
        let html = fs.readFileSync(`article/${name}.html`, 'utf8')
        
        return {
          id: name,
          title: meta.title,
          text: html
        }
      }
      else {
        let txt = fs.readFileSync(`article/${name}.md`, 'utf8')
        let html = marked(txt)
        
        return {
          id: name,
          title: meta.title,
          text: html
        }
      }
    }
    catch (e) {
      this.logger.error(e)
    }
  }

}

