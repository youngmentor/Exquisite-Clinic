import React from 'react'
import "./Value.css"
import ValueData from './ValueData'
const Value = () => {
    return (
        <div className='Value_Main'>
            <h2>Our Values</h2>
            <div className='Value_Main_Wrap'>
                {ValueData.map ((i)=>
                <div className='Values'>
                    <h4>{i.head}</h4>
                    <p>{i.text}</p>
                </div>
                )}
            </div>
        </div>
    )
}

export default Value