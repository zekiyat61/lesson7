import {useState} from 'react'
import "./App.css"

const App = () => {
  const [input, setInput] = useState("")
  console.log(input)
  return (
    <div className='container'>
      <input 
      value={input} 
      onChange={(e)=>setInput(e.target.value)}/>
      
    </div>
  )
}

export default App
