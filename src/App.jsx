import { useState } from 'react'
import About from './About/About'
// import './App.css'
import "./App.css"
import Header from './Header/Header'
import Landing from './Landing/Landing'
function App() {

  return (
    <div className="App">
       <Header/>
       <Landing/>
       <About/>
    </div>
  )
}

export default App
