import { useState } from 'react'
import './App.css'

// let counter = 15

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    // setCounter(counter+1)
    setCounter((prevCounter) => prevCounter+1) //Prevents batching
    // setCounter((prevCounter) => prevCounter+1) 
    // setCounter((prevCounter) => prevCounter+1) 
    // setCounter((prevCounter) => prevCounter+1) 
  }

  const removeValue = () => {
    if (counter <= 0) setCounter(0)
      else {
        setCounter(counter-1)
      }
  }

  return (
    <>
     <h1> React course {counter}</h1>
     <h2>Counter value: {counter}</h2>
     <button
      onClick={addValue}
     >Add value</button>{" "}
     <button
      onClick={removeValue}
     >Remove value</button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
