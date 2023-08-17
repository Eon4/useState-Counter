import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  function upDateCount() {
    setCount(count+1)
  }

  return (
    <>
    <button onClick={() => upDateCount()}>Klik her!</button>

    <h4>Du har klikket på knappen</h4>
    <p>{count}</p> <h4>gange</h4>

    </>
  )
}

export default App
