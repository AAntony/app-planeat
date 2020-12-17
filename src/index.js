import React from 'react'
import ReactDOM from 'react-dom'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

import 'react-datepicker/dist/react-datepicker.css'

import './index.css'

import App from './components/App'
import Firebase, { FirebaseContext } from './components/Firebase'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
