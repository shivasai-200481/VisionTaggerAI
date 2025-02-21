import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Head from './components/Headed'
import MiddleText from './components/MiddleText'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head/>
      <MiddleText/>

    </>


  )
}

export default App
