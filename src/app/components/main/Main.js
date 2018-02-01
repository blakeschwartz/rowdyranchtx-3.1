
import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Layout from '../Layout.js'
import Header from '../Header.js'
import Carousel from './Carousel.js'


let content = () => {
  return (
    <div>    
      <Header />
      <div className="col-sm-12">
        <Carousel />

        <div className="center">
          <p>
            The Rowdy Ranch TX is located in Bastrop County, Texas. We breed Nubian and Nigerian Dwarf Dairy Goats, registered with the American Dairy 
            Goat Association. We also breed and cross Kiko and Boer goats to achieve a Texas Genemaster herd. 

            See <a href="http://facebook.com/rowdyranchtx">facebook.com/rowdyranchtx</a> for recent pictures and events.
          </p>
        </div>
      </div>
    </div>
  )
}

export default class Main extends Component {

  constructor(props) {
    super(props)
  }

  render = () => {
    return (<Layout content={content}/>)
  }
}

/*
    <div className="col-sm-4">
    </div>
    <div className="col-sm-8">
      <Carousel />
*/