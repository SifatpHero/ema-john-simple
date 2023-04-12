import { useState } from 'react'
import './App.css'
import Header from './conponents/Header/Header'
import Shop from './conponents/Shop/Shop'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}

export default App
