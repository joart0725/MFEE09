import React from 'react'
import { connect } from 'react-redux'
// 改用動作類型的常數
import { ADD_VALUE, MINUS_VALUE } from '../actions/actionTypes'
import * as actionCreators from '../actions/index'

function Counter(props) {
  console.log(actionCreators)
  console.log('props', props)

  return (
    <>
      <h1>{props.total}</h1>
      {/* <button
        onClick={() => props.dispatch({ type: ADD_VALUE, value: 1 })}
      ></button>+1</button> */}

      {/* 注意：執行綁定的動作建立器時，Redux會協助自動dispatch */}
      <button onClick={() => props.addValue(1)}>+1</button>
      <button onClick={() => props.minusValue(1)}>+1</button>
    </>
  )
}

const mapStateToProps = (store, ownProps) => {
  console.log(ownProps)
  return { total: store.counter }
}

export default connect(mapStateToProps, actionCreators)(Counter)
