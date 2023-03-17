import { useState } from 'react'
import About from './About/About'
// import './App.css'
import "./App.css"
import Header from './Header/Header'
import Landing from './Landing/Landing'
import Mission from './Mission/Mission'
function App() {

  return (
    <div className="App">
       <Header/>
       <Landing/>
       <About/>
       <Mission/>
    </div>
  )
}

export default App
