import React from 'react'
import "./Landing.css"
const Landing = () => {
    return (
        <div className='Landing_Main'>
            <div className='Landing_Main_Wrap'>
                <img src='/LandingPic.png' alt="" className='Landing_Img' />
                <div className='Landin_Text'>
                    <p>At <b className='b'>Exquisite Physiotherapy Clinic</b>, we understand your need to balance your busy schedule and good health at affordable cost.</p>
                    <button className='Landing_Appointment_Bttn'>Book An Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Landing