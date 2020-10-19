import React, { useState, useEffect } from 'react'

function Register(props) {
  const {
    isAuth,
    name,
    setName,
    username,
    setUsername,
    password,
    setPassword,
    passwordComfirm,
    setPasswordComfirm,
    email,
    setEmail,
  } = props

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">姓名</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">密碼</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword2">確認密碼</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            value={passwordComfirm}
            onChange={(e) => setPasswordComfirm(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            if (!name) {
              alert('姓名沒填')
              return
            }
          }}
        >
          註冊
        </button>
      </form>
    </>
  )
}

export default Register
