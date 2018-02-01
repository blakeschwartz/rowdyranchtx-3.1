
import babelCore from 'babel-core/register'
import babelPolyfill from 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
