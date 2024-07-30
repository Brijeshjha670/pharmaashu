import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HomePage from './page/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Header/>
   <HomePage/>
   </>
  )
}

export default App
