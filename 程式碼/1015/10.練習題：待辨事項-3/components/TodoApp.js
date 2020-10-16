import React, { useState, useEffect } from 'react'

function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('')
  const [todos, setTodos] = useState(['買iphone 12 pro max', '學好react'])

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>

      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          //處理按下Enter
          if (e.key === 'Enter' && e.target.value) {
            // 建立新的陣列(合併原本的todos陣列中的值)
            const newTodos = [e.target.value, ...todos]

            // 設定todos狀態值
            setTodos(newTodos)

            // 清空輸入框
            setTodoInput('')
          }
        }}
      />
      <hr />
      <ul>
        {/* map使用時通常子元素會要求唯一key值(id值)  */}
        {/* 這裡用索引值作為key值(id值)  */}
        {todos.map((value, index) => {
          return <li key={index}>{value}</li>
        })}
      </ul>
    </>
  )
}

export default TodoApp
