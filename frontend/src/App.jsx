import React from 'react'
import Home from './Pages/Home.jsx'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Men from './Pages/Men.jsx'
import Admin from "./Pages/Admin.jsx"
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} /> 
    <Route path='/men' element={<Men/>} /> 
    <Route path="/admin" element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
