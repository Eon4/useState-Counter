import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function upDateCount() {
    setCount(count+1)
  }

  return (
    <>
    <p>{count}</p>
    <button onClick={() => upDateCount()}>UPDATE</button>
    </>
  )
}

export default App
