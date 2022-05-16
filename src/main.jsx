import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import { totalCalls } from "./body/Calls"

import App from './header/App'
import Calls from './body/Calls'



ReactDOM.render(
  <React.StrictMode>
    <App />
    <Calls addr={await totalCalls()}/>
  </React.StrictMode>,
  document.getElementById('root')
)
