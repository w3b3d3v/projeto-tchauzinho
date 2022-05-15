import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App, { totalCalls } from './App'

totalCalls()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
