import { useState } from "react"

function App() {
  const [color, setColor] = useState('white')

  return (
    <div className="w-full h-screen duration-300"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center gap-2 bottom-18 inset-x-0 px-2 mx-5 rounded-full">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white outline px-4 py-2 m-2 rounded-full">
          <button
          onClick={() => setColor('red')}
          className="outline-none px-3 py-1 bg-red-500 rounded-full text-white shadow-lg"
          >Red</button>
          <button
          onClick={() => setColor('green')}
          className="outline-none px-3 py-1 bg-green-500 rounded-full text-white shadow-lg"
          >Green</button>
          <button
          onClick={() => setColor('gray')}
          className="outline-none px-3 py-1 bg-gray-500 rounded-full text-white shadow-lg"
          >Gray</button>
          <button
          onClick={() => setColor('blue')}
          className="outline-none px-3 py-1 bg-blue-500 rounded-full text-white shadow-lg"
          >Blue</button>
          <button
          onClick={() => setColor('purple')}
          className="outline-none px-3 py-1 bg-purple-700 rounded-full text-white shadow-lg"
          >Purple</button>
          <button
          onClick={() => setColor('cyan')}
          className="outline-none px-3 py-1 bg-cyan-500 rounded-full text-white shadow-lg"
          >Cyan</button>
          <button
          onClick={() => setColor('pink')}
          className="outline-none px-3 py-1 bg-pink-300 rounded-full text-black shadow-lg"
          >Pink</button>
          <button
          onClick={() => setColor('orange')}
          className="outline-none px-3 py-1 bg-orange-500 rounded-full text-white shadow-lg"
          >Orange</button>
          <button
          onClick={() => setColor('violet')}
          className="outline-none px-3 py-1 bg-violet-500 rounded-full text-white shadow-lg"
          >Violet</button>
          <button
          onClick={() => setColor('yellow')}
          className="outline-none px-3 py-1 bg-yellow-500 rounded-full text-white shadow-lg"
          >Yellow</button>
          <button
          onClick={() => setColor('black')}
          className="outline-none px-3 py-1 bg-black rounded-full text-white shadow-lg"
          >Black</button>
        
        </div>
      </div>
    </div>
  )
}

export default App
