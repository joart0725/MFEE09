// 導入其它的模組
import React, { useState } from 'react'

// 導入要使用的元件程式，注意路徑要正確，不需要加副檔名
import AppClass from './components/AppClass'
import AppFunction from './components/AppFunction'

function App() {
  return (
    <>
      <AppClass />
      <AppFunction />
    </>
  )
}

// 輸出元件(函式)
export default App
