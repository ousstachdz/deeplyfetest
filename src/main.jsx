import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import * as serviceWorker from './serviceWorker'
import swDev from './swDev'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

swDev()
