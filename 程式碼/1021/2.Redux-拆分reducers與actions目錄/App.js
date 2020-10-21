import React, { useState, useEffect } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Counter from './pages/Counter'

function App() {
  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            {/* 注意：要加上網址參數 */}
            <Route exact path="/">
              <Counter />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
