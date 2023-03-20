import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import "./App.css"
import Header from './Header/Header'
import Landing from './Landing/Landing'
import Service from './OurService/Service'
import Product from './Product/Product'
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
