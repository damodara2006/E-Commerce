import React from 'react'
import Home from './Pages/Home.jsx'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Men from './Pages/Men.jsx'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/men' element={<Men/>} /> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
