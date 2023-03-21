import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import "./App.css"
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Service from './Components/OurService/Service'
import Product from './Components/Product/Product'
function App() {

  return (
    <div className="App">
     <HashRouter>
     <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/service' element={<Service />} />
          <Route path='/product' element={<Product />} />
        </Routes>
     </HashRouter>
    </div>
  )
}

export default App
