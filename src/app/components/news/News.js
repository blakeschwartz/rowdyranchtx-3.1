
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import NewsList from './NewsList.js'
import Layout from '../Layout.js'
import Header from '../Header.js'

import Store from '../../store'

class News extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      news: []
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
    return (
      <div>
        <Layout content={() =>
          <div>    
            <header>
              <h1 className='main-title'><span className='rr-title'><span className='rr-title-cap'>N</span>ews</span></h1>
            </header>
            <NewsList news={this.state.news}/>
          </div>
        }/>
      </div>
    )
  }
}

News.contextTypes = {
  store: PropTypes.object.isRequired
}

let mapStateToProps = (state) => {
  return {news: state.news}
}

let mapDispatchToProps = (dispatch) => {
  return {}
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(News)
