import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='bg-green-400 rounded-3xl text-center mx-10 my-10 p-5'>Currency Converter</h1>
    </div>
  )
}

export default App
