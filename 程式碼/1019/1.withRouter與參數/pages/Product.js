import React, { useState, useEffect } from 'react'
import { Link, Switch, withRouter } from 'react-router-dom'

function Product(props) {
  console.log(props)
  return (
    <>
      <h1>Product</h1>
      <h3>{props.match.params.id}</h3>
    </>
  )
}

export default withRouter(Product)
