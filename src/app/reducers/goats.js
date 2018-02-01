
import React from 'react'  // eslint-disable-line no-unused-vars

let goat = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_GOATS':
      let goats = []
      //console.log(JSON.stringify(action, null, 4))

      for (let goat of action.goats) {
        goats.push(goat)
      }
      return goats

    default:
      return state
  }
}

let goats = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_GOATS':
      let st = [
        ...state,
        ...goat(undefined, action)
      ]
      // console.log(JSON.stringify(st))
      return st

    default:
      return state
  }
}

export default goats
