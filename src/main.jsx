import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import App from "./components/header/App"
import Calls from "./components/body/Calls"


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Calls />
  </React.StrictMode>,
  document.getElementById('root')
)
