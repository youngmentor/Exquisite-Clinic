import { useState } from 'react'
import About from './About/About'
// import './App.css'
import "./App.css"
import Appointment from './Appointment/Appointment'
import Contact from './Contact/Contact'
import Header from './Header/Header'
import Landing from './Landing/Landing'
import Mission from './Mission/Mission'
import Value from './Value/Value'
function App() {

  return (
    <div className="App">
       <Header/>
       <Landing/>
       <About/>
       <Mission/>
       <Value/>
       <Appointment/>
       <Contact/>
    </div>
  )
}

export default App
