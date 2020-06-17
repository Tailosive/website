import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'rbx/index.css'
import './styles/index.css'
import Home from './pages/Home'
import Bingo from './pages/WWDC/Bingo'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{height: '100vh'}}>
        <Switch>
          <React.Suspense fallback={<div></div>}>
            <Route exact component={Home} path='/' />
            <Route exact component={Bingo} path='/bingo' /> 
          </React.Suspense>
        </Switch>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
