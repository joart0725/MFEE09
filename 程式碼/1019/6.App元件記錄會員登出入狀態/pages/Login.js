import React, { useState, useEffect } from 'react'

function Login(props) {
  const { isAuth, setIsAuth } = props

  return (
    <>
      <h1>會員登入登出</h1>
      <h3>目前會員狀態：{isAuth ? '登入' : '登出'}</h3>
      <button onClick={() => setIsAuth(true)}>登入</button>
      <button onClick={() => setIsAuth(false)}>登出</button>
    </>
  )
}

export default Login
