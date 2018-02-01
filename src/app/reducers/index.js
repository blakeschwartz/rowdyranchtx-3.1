
import {combineReducers} from 'redux'
import goats from './goats'
import news from './news'
import articles from './articles'

let reducers = combineReducers({
  goats: goats,
  news: news,
  articles: articles
})

export default reducers
