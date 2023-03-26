import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import "./App.css"
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Login from './Components/Login/Login'
import Service from './Components/OurService/Service'
import Product from './Components/Product/Product'
import SignUp from './Components/Sign Up/SignUp'
function App() {

  return (
    <div className="App">
     <HashRouter>
     {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/service' element={<Service />} />
          <Route path='/product' element={<Product />} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
     </HashRouter>
    </div>
  )
}

export default App
