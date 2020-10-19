import React, { useState, useEffect } from 'react'

import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MainContent from './components/MainContent'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  // 控制是否登入
  const [isAuth, setIsAuth] = useState(false)

  // for login usage
  const [authUsername, setAuthUsername] = useState('')
  const [authPassword, setAuthPassword] = useState('')

  // for Register & Profile usage
  const [name, setName] = useState('')
  const [username, setUsername] = useState('test')
  const [password, setPassword] = useState('123')
  const [passwordComfirm, setPasswordComfirm] = useState('')
  const [email, setEmail] = useState('')

  return (
    <Router>
      <>
        <MyNavbar />
        <MainContent>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                authUsername={authUsername}
                setAuthUsername={setAuthUsername}
                authPassword={authPassword}
                setAuthPassword={setAuthPassword}
                username={username}
                password={password}
              />
            </Route>
            <Route path="/register">
              <Register
                isAuth={isAuth}
                name={name}
                setName={setName}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                passwordComfirm={passwordComfirm}
                setPasswordComfirm={setPasswordComfirm}
                email={email}
                setEmail={setEmail}
              />
            </Route>
            <Route path="/profile">
              <Profile
                isAuth={isAuth}
                name={name}
                setName={setName}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
              />
            </Route>
          </Switch>
        </MainContent>
        <MyFooter />
      </>
    </Router>
  )
}

export default App
