import React, { useState } from 'react'
import axios from "axios"
import SignForm from './SignForm';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
const navigate =useNavigate()
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const [load, setLoad] = useState(false)


    const Form = [
        {
            id: 1,
            name: "firstName",
            type: "text",
            label: "First Name",
            placeholder: "First Name",
            required: true,
        },
        {
            id: 2,
            name: "lastName",
            type: "text",
            label: "Last Name",
            placeholder: "Last Name",
            required: true,
        },
        {
            id: 3,
            name: "email",
            type: "text",
            label: "Email",
            placeholder: "Email",
            required: true,
        },
        {
            id: 4,
            name: "password",
            type: "password",
            label: "Password",
            placeholder: "Password",
            required: true,
            pattern: `(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}`,
            errMsg: `At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character`,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            label: "Confirm Password",
            placeholder: "Confirm Password",
            pattern: form.password,
            errMsg: "Password must match!",
            required: true,
        },
    ]

    const handleSubmit = async (event) => {
        // setLoad(true)
        try {
          event.preventDefault();
          console.log("clicked")
          const response = await axios.post("https://exquisite-physioteraphy-clinic.onrender.com/api/adminsignup", form);
          console.log(response.data)
          console.log(response.data.message);
          response.status === 201 ? navigate("/login") : null  
          login_alert()
        } catch (error) {
          console.log("error")
        }
    
      };
      const handleChange = event => {
        setForm((prevState) => {
          return { ...prevState, [event.target.name]: event.target.value }
        })
      };

  return (
    <div  className="main">
        <div className='SignUp-main'>
            <form onSubmit={handleSubmit}  className="formData" > 
            {Form.map((i) => (
              <SignForm key={i.id} {...i} handleChange={handleChange} form={form[i.name]} />
            ))}
            <button type="submit" className='signbttn' >Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp