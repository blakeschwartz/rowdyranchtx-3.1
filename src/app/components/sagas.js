
import {call, put, takeLatest} from 'redux-saga/effects'
// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios'


let apiFetchNews = () => {
    // console.log("apiFetchTodos")
  return axios.get('/api/news')
}

let apiFetchArticles = () => {
  return axios.get('/api/articles')
}

let apiFetchGoats = () => {
  return axios.get('/api/ldb/goats')
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchNews(action) {
  try {
    let news = yield call(apiFetchNews)
    yield put({type: 'LOAD_NEWS', news: news.data})

    let articles = yield call(apiFetchArticles)
    yield put({type: 'LOAD_ARTICLES', articles: articles.data})

    let goats = yield call(apiFetchGoats)
    //console.log(JSON.stringify(goats, null, 4))
    yield put({type: 'LOAD_GOATS', goats: goats.data})
  }
  catch (e) {
    yield put({type: 'USER_FETCH_FAILED', message: e.message})
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/

function* mySaga() {
  yield takeLatest('GET_NEWS_DATA', fetchNews)
}

export default mySaga
