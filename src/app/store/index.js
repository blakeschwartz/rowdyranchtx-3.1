
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import mySaga from '../components/sagas'
import createSagaMiddleware from 'redux-saga'

class Store {

  static instance = null

  static getInstance() {
    if (!this.instance) {
      //console.log('Making Store...')
      this.instance = new Store()
    }

    //console.log('getInstance')
    //console.log(this.instance.store.getState())

    return this.instance
  }

  constructor() {
    let sagaMiddleware = createSagaMiddleware()

    // mount it on the Store
    this.store = createStore(
      reducer,
      applyMiddleware(sagaMiddleware)
    )

    // then run the saga
    sagaMiddleware.run(mySaga)

    // store.dispatch({type: 'GET_TODO_DATA'})
    this.store.dispatch({type: 'GET_NEWS_DATA'})
  }

  getStore = () => {
    return this.store
  }
}

export default Store
