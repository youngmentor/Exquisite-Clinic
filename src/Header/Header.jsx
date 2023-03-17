import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div className='Header_Main'>
            <div className='Header_Main_Wrap'>
                <img src='/123.png' alt=''
                    className='Header_Logo'
                />
                <div className='Header_Navigator'>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Our Service</p>
                    <p>Products</p>
                </div>
                <div className='Header_Button'>
                    <button className='Header_Btt1'>Sign Up</button>
                    <button className='Header_Btt2'>Log In</button>
                </div>
            </div>
        </div>
    )
}

export default Header