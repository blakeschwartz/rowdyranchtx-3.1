
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from '../Layout.js'
import Header from '../Header.js'

import Store from '../../store'
import { find, propEq } from 'ramda'

class Article extends Component {

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
    articles = this.state.articles
    article = find(propEq('id', this.props.match.params.name), articles)

    if (article) {
      return (
        <div>
          <Layout content={() =>
            <div className="article">    
              <header>
                <h1 className='main-title'><span className='rr-title'>{article.title}</span></h1>
              </header>
              <div className='article' dangerouslySetInnerHTML={{__html: article.body}}></div>
            </div>
          }/>
        </div>
      )
    }
    else {
      return (
        <div>
          <Layout content={() => {
            return (
              <div>    
                <header>
                  <h1 className='main-title'><span className='rr-title'>Article Not Found</span></h1>
                </header>
                <div className='content'>Article: '{this.props.match.params.name}' not found.</div>
              </div>
            )
          }}/>
        </div>
      )
    }
  }
}

Article.contextTypes = {
  store: PropTypes.object.isRequired
}


let mapStateToProps = (state) => {
  return {articles: state.articles}
}

let mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Article)
