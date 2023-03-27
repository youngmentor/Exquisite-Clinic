import React, { useEffect, useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import './Login.css'
import axios from 'axios'
// import { ThemeContext } from "../../ContextApi/Context";
const Login = () => {
    // const { verifyAlert, login_alert } = useContext(ThemeContext)
    const navigate = useNavigate()
    const [err, setErr] = useState('')
    const [value, setValue] = useState({
        email: "",
        password: ""
    })
    const field = [
        {
            id: 1,
            name: "email",
            label: "email",
            placeholder: "Email",
            type: "text",
            err: "input a valid email",
            required: true

        },
        {
            id: 2,
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password",
            err: "forget password",
            required: true
        },
    ]
    const [focus, setFocus] = useState(false)

    const handleFocus = (e) => {
        setFocus(true)
    }

    // }
    // const logOut = async () => {
    //     const res = await axios.post(`https://eduglobal.onrender.com/api/admin/logout/${user?._id}`)
    //     console.log(res.data)
    //     res.status === 200 ? dispatch(clearUser()) : null
    //     res.status === 201 ? navigate('/loginuser/login') : null
        
    // }

    const handleLogin = async (e) => {
        console.log("clicked")
        e.preventDefault();
        await axios.post('https://eduglobal.onrender.com/api/admin/login', value)     
            .then(function (res) {
                res.data.data.email === value.email ? dispatch(addUser(res.data.data)) : null
                res.data.data.email === value.email ?  navigate('/admin') : null
                // if (res.data.data.isVerifield === true ) {
                //     navigate('/admin') 
                //   } else {
                //     logOut()
                //     setLoad(false)
                //   }
                

            })
            .catch(function (error) {
                
                console.log(error);
               
            });
    }
    const handleChange = (event) => {
        setValue({ ...value, [event.target.name]: event.target.value })
    };


    return (
        <main className="Login" >
            <form onSubmit={handleLogin} className="login-wrap"   >
                <div className="LoginForm">
                    {field.map((i) => (
                        <label key={i.id}>
                            <input
                                className="LoginInput"
                                type={i.type}
                                name={i.name}
                                placeholder={i.placeholder}
                                onChange={handleChange}
                                required={i.required}
                                pattern={i.pattern}
                                onBlur={handleFocus}
                                focused={focus.toString()}
                            />
                            <span className='Login_err'>{i.err}</span>
                        </label>
                    ))}
                    <p className='forg' onClick={() => navigate("/forgetpassword")} >Forgot Paasword ?</p>
                    <button type="submit" className="Loginbtt" >Login</button>
                </div>
            </form>
        </main>
    );
};

export default Login