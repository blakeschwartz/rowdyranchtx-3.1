
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import GoatGrid from './GoatGrid.js'
import Layout from '../Layout.js'
import Header from '../Header.js'

import Store from '../../store'

class Goats extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      goats: []
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
              <h1 className='main-title'><span className='rr-title'><span className='rr-title-cap'>G</span>oats</span></h1>
            </header>
            <GoatGrid goats={this.state.goats}/>
          </div>
        }/>
      </div>
    )
  }
}

Goats.contextTypes = {
  store: PropTypes.object.isRequired
}

let mapStateToProps = (state) => {
  return {goats: state.goats}
}

let mapDispatchToProps = (dispatch) => {
  return {}
}
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Goats)
