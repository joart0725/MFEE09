import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'

function Product(props) {
  let { id } = useParams()

  console.log(props)

  return (
    <>
      <h1>Product</h1>
      <Breadcrumb />
      <h3>{id}</h3>
    </>
  )
}

export default Product
