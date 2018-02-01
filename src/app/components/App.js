
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Store from '../store'
import Main from './main/Main.js'
import News from './news/News.js'
import Goats from './goats/Goats.js'
import GoatDetail from './goats/GoatDetail.js'
import Page from './page/Page.js'
import Gallery from './gallery/Gallery.js'

let NotFound = () => {
  return (<h1>404.. This page is not found!</h1>)
}

export default class App extends Component {

  constructor(props) {
    super(props)
  }


  render = () => {
    return (
      <MuiThemeProvider>
        <Provider store={Store.getInstance().getStore()}>
          <HashRouter>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/news' component={News} />
              <Route path='/gallery' component={Gallery} />
              <Route path='/page/:name' component={Page} />
              <Route component={NotFound} />
            </Switch>
          </HashRouter>
        </Provider>
      </MuiThemeProvider>
    )
  }

}

//              <Route path='/goats/:id' component={GoatDetail} />
//              <Route path='/goats' component={Goats} />
//           <BrowserRouter>

