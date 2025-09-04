import { useState } from 'react'

import './App.css'
import Searchtable from './Components/Searchtable'
import Navbar from './Components/Navbar'
import Bottomdiv from './Components/Bottomdiv'
function App() {

  return (
    <>
    <Navbar/>
     <Searchtable/>
     <Bottomdiv/>

    </>
  )
}

export default App
