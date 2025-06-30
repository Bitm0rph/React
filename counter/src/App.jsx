import { useState } from 'react'
import './App.css'

function App() {
  let [val, setVal] = useState(5)
  function addValue(){
    setVal(val+1)
    setVal(val+1)
    setVal(val+1)
    setVal(val+1)
  }
  let removeValue = () => setVal(--val)
  return (
    <>
      <h1>Home Page</h1>
      <h2>Counter value is {val}</h2>

      <button onClick ={addValue} >Add value to {val}</button>
      <br />
      <button onClick={removeValue}>Remove value from {val}</button>
    </>
  )
}

export default App
