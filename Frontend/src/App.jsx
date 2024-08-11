import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './App.css'
import { Outlet } from 'react-router-dom'
import {Button} from './components'
import Header from './Header'
function App() {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <h1 style={{fontSize : "40px",margin:"40px",padding:"40px",backgroundColor:"purple",color:"cyan"}}>A project for basic crud operation</h1>
      <Outlet/>
    </div>
  )
}

export default App
