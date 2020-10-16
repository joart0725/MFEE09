import React from 'react'

function TodoItem(props) {
  const { text, completed, completedMethod, deleteMethod } = props
  return (
    <>
      <li>
        <input type="checkbox" checked={completed} onChange={completedMethod} />
        {completed ? <del>{text}</del> : text}
        <button onClick={deleteMethod}>刪除</button>
      </li>
    </>
  )
}

export default TodoItem
