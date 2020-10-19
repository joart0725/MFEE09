import React, { useState, useEffect } from 'react'

function Login(props) {
  const {
    isAuth,
    setIsAuth,
    authUsername,
    setAuthUsername,
    authPassword,
    setAuthPassword,
    username,
    password,
  } = props

  if (isAuth) return <button onClick={() => setIsAuth(false)}>登出</button>

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">帳號</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={authUsername}
            onChange={(e) => setAuthUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">密碼</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={authPassword}
            onChange={(e) => setAuthPassword(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            記得我
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (authUsername === username && authPassword === password) {
              setIsAuth(true)
              alert('登入成功')
            } else {
              alert('帳號/密碼錯誤')
            }
          }}
        >
          登入
        </button>
      </form>
    </>
  )
}

export default Login
