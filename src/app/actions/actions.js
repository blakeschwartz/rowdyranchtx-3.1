
// action types

export const LOAD_NEWS = 'LOAD_NEWS'
export const LOAD_ARTICLES = 'LOAD_ARTICLES'
export const GET_NEWS_DATA = 'GET_NEWS_DATA'

// action creators

export let loadNews = (news) => {
  return {type: LOAD_NEWS, news}
}

export let loadArticles = (articles) => {
  return {type: LOAD_ARTICLES, articles}
}
