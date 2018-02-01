
import React from 'react'

let newsItem = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_NEWS':
      let newsList = []
      //console.log(JSON.stringify(action, null, 4))
      for (let news of action.news) {
        newsList.push(news)
      }
      
      //console.log(JSON.stringify(newsList))
      return newsList

    default:
      return state
  }
}

let news = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_NEWS':
      let st = [
        ...state,
        ...newsItem(undefined, action)
      ]
      //console.log(JSON.stringify(st))
      return st

    default:
      return state
  }
}

export default news
