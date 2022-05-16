import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import App from './header/App'
import Calls from './body/Calls'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Calls />
  </React.StrictMode>,
  document.getElementById('root')
)
