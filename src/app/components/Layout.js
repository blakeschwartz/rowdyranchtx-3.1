
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Nav from './Nav.js'
import Footer from './Footer.js'

export default class Layout extends Component {

  constructor(props) {
    super(props)
  }

  render = () => {
    return (
      <div className="container">
        <div className="container-fluid">
          <Nav />
        </div>

        <div className="row container-fluid">
          {this.props.content()}
        </div>

        <div className="row container-fluid">
          <Footer />
        </div>
      </div>
    )
  }
}