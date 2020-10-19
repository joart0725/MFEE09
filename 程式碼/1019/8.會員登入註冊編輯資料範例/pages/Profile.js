import React, { useState, useEffect } from 'react'

function Profile(props) {
  const { isAuth } = props

  return (
    <>
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">帳號</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">姓名</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="button" className="btn btn-primary">
          修改
        </button>
      </form>
    </>
  )
}

export default Profile
