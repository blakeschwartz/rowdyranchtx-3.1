
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../Layout.js'
import Header from '../Header.js'

import Store from '../../store'
import { find, propEq } from 'ramda'

class Page extends Component {

  constructor(props) {
    super(props)

    this.state = {
      articles: []
    }

    this.store = Store.getInstance().getStore()
  }

  componentDidMount = () => {
    this.handleChange()
    this.store.subscribe(this.handleChange)
  }

  handleChange = () => {
    this.setState(this.store.getState())
  }

  render = () => {
    let pages = this.state.articles
    let page = find(propEq('id', this.props.match.params.name), pages)

    if (page) {
      return (
        <div>
          <Layout content={() =>
            <div className="article">    
              <header>
                <h1 className='main-title'><span className='rr-title'>{page.title}</span></h1>
              </header>
              <div className='article' dangerouslySetInnerHTML={{__html: page.body}}></div>
            </div>
          }/>
        </div>
      )
    }
    else {
      return (      
        <div>
          <Layout content={() =>
            <div>    
              <header>
                <h1 className='main-title'><span className='rr-title'>Page Not Found</span></h1>
              </header>
              <div className='content'>Page: '{this.props.match.params.name}' not found.</div>
            </div>
          }/>
        </div>
      )
    }
  }
}

Page.contextTypes = {
  store: PropTypes.object.isRequired
}

let mapStateToProps = (state) => {
  return  {articles: state.articles}
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page)

