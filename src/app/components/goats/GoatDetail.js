
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Layout from '../Layout.js'
import Store from '../../store'
import {find, propEq} from 'ramda'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import {connect} from 'react-redux'

class GoatDetail extends Component {

  constructor(props) {
    super(props)

    this.state = { 
      goats: []
    }

    this.store = Store.getInstance().getStore()
  }

  componentWillMount = () => {
    this.handleChange()
    this.store.subscribe(this.handleChange)
  }

  handleChange = () => {
    this.setState(this.store.getState())
  }

  render = () => {
    goats = this.state.goats
    goat = find(propEq('rrid', this.props.match.params.id), goats)

    image = null

    if (goat) { 
      if (goat.image) {
        image = '/image/' + goat.image
      }
      else {
        image = '/image/NubianGoatLogo-128.png'
      }
    }
    else {
      goat = { rrid: "", name: "", breed: "", sex: ""}
    }

    return (
      <div>
        <Layout content={() => {
          <div>
            <header>
              <h1 className='main-title'><span className='rr-title'><span className='rr-title-cap'>G</span>oats</span></h1>
            </header>

            <div style={{maxWidth: "512px", margin: "auto"}}>
              <Card>
                <CardMedia
                  overlay={<CardTitle title={goat.name} subtitle={goat.breed} />}
                >
                  <img src={image} alt="" />
                </CardMedia>
                <CardText>
                  <p>{goat.rrid}</p>
                  <p>{goat.sex}</p>
                </CardText>
              </Card>
            </div>
          </div>
        }}/>
      </div>
    )
  }
}

GoatDetail.contextTypes = {
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
)(GoatDetail)

/*
#              <CardHeader
#                title={goat.name}
#                subtitle={goat.breed}
#              />
#              <CardTitle title={goat.name} subtitle={goat.breed} />
*/