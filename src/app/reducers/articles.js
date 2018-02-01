
import React from 'react'  // eslint-disable-line no-unused-vars

let extractArticle = (state = {}, action) => {
  // console.log(JSON.stringify(action, null, 4))
  switch (action.type) {
    case 'LOAD_ARTICLES':
      let articleList = []
      for (let article of action.articles) {
        articleList.push({
          id: article.id,
          title: article.title,
          body: article.text
        })
      }
      return articleList

    default:
      return state
  }
}


let articles = (state = [], action) => {
  // console.log(JSON.stringify(action, null, 4))
  switch (action.type) {
    case 'LOAD_ARTICLES':
      let st = [
        ...state,
        ...extractArticle(undefined, action)
      ]
      // console.log(JSON.stringify(st, null, 4))
      return st

    default:
      return state
  }
}

export default articles
