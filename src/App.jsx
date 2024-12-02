import{useState} from 'react'
import "./App.css"

const App = () => {
  const [input,setInput] = useState("")
const handle=(e)=>{
  setInput(e.target.value)
  console.log(input)


}
  
  return (
    <div>
      <input value={input}
      onChange={handle}/>
      <p>{input}</p>
    </div>
  )
}

export default App
