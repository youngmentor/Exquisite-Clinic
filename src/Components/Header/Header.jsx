import React, { useState } from 'react'
import "./Header.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle)
        setIsOpen(!isOpen)
    };
    return (
        <div className='Header_Main'>
            <div className='Header_Main_Wrap'>
                <img src='/123.png' alt=''
                    className='Header_Logo'
                    onClick={() => navigate("/")}
                />
                <div className='Header_Navigator'>
                    <p onClick={() => navigate("/")} >Home</p>
                    <p onClick={() => navigate("/service")} >Our Service</p>
                    <p onClick={() => navigate("/product")} >Products</p>
                </div>
                <div className='Header_Button'>
                    <button className='Header_Btt1' onClick={() => navigate("/signup")} >Sign Up</button>
                    <button className='Header_Btt2' onClick={() => navigate("/login")}  >Log In</button>
                </div>
                {
                    isOpen && (
                        <div className='Header_Navigator_Mobile'>
                            <div className='Header_Navigator_Mob'>
                                <p onClick={() => navigate("/")}>Home</p>
                                <p onClick={() => navigate("/service")} >Our Service</p>
                                <p onClick={() => navigate("/product")}>Products</p>
                            </div>
                            <div className='Header_Button_Mobile'>
                                <p className='Header_Btt1_Mob' onClick={() => navigate("/signup")} >Sign Up</p>
                                <p className='Header_Btt2_Mob' onClick={() => navigate("/login")} >Log In</p>
                            </div>
                        </div>
                    )
                }

                <div className='Header_Burger'>
                    {toggle ? <AiOutlineMenu onClick={handleToggle} /> : <AiOutlineClose onClick={handleToggle} />}
                </div>
            </div>
        </div>
    )
}

export default Header