import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [len, setLen] = useState(8)
  const [num, setNum] = useState(false)
  const [splChar, setSplChar] = useState(false)
  const [passwd, setPasswd] = useState("")

  const passwdRef = useRef(null)
  
  const passwdGenerator = useCallback(() => {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(num) str += '0123456789';
    if(splChar) str += '~{}[]|!@#$%^&*()_-=/.?><:'

    let pass = ''
    for (let i = 0; i < len; i++) {
      let idx = Math.floor(Math.random()*str.length);
      pass += str[idx]; 
    }
    setPasswd(pass)
  },[len,num,splChar,setPasswd]);

  const copyPasswordToClipboard = useCallback(() => {
    passwdRef.current?.select() // This selects the entire text
    passwdRef.current?.setSelectionRange(3,8) // The given range will be selected
    window.navigator.clipboard.writeText(passwd)
  },[passwd])

  useEffect(() => passwdGenerator(),[len,num,splChar,passwdGenerator])
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-2 my-8 bg-gray-700 text-white text-2xl">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={passwd}
        className='outline-none w-full px-3 py-1 bg-white text-black'
        placeholder='password'
        readOnly
        ref={passwdRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='bg-blue-600 px-3 shrink-0 hover:bg-blue-800'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1 mx-4'>
          <input type="range" 
          min={8} max={100} 
          value={len} className='cursor-pointer'
          onChange={(e) => setLen(e.target.value)}
          />
          <label className='text-amber-600'>Length: {len}</label>
        </div>
        <div className='flex items-center gap-x-1 mx-5 text-amber-600'>
          <input type="checkbox" 
          defaultChecked = {num}
          id='numInput'
          onChange={() => setNum((prev) => !prev)}
          />
          <label >Number</label>
        </div>
        <div className='flex items-center gap-x-1 mx-5 text-amber-600'>
          <input type="checkbox" 
          defaultChecked = {splChar}
          id='numInput'
          onChange={() => setSplChar((prev) => !prev)}
          />
          <label >Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
