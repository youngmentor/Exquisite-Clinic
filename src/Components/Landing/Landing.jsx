import React from 'react'
import "./Landing.css"
import About from '../About/About'
import Mission from '../Mission/Mission'
import Value from '../Value/Value'
import Appointment from '../Appointment/Appointment'
import Contact from '../Contact/Contact'
import Header from '../Header/Header'
const Landing = () => {
    return (
        <div className='Landing_Main'>
            <Header />
            <div className='Landing_Main_Wrap'>
                <img src='/LandingPic.png' alt="" className='Landing_Img' />
                <div className='Landin_Text'>
                    <p>At <b className='b'>Exquisite Physiotherapy Clinic</b>, we understand your need to balance your busy schedule and good health at affordable cost.</p>
                    <button className='Landing_Appointment_Bttn'>Book An Appointment</button>
                </div>
            </div>
            <About />
            <Mission/>
            <Value/>
            <Appointment/>
            <Contact/>
        </div>
    )
}

export default Landing