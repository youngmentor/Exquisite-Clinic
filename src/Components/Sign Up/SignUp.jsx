import React, { useState } from 'react'

const SignUp = () => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      const [load, setLoad] = useState(false)


    const Form= [
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
            name: "Email",
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

    // const handleSubmit = async (event) => {
    //     setLoad(true)
    //     try {
    //       event.preventDefault();
    //       console.log("clicked")
    //       const response = await axios.post("https://eduglobal.onrender.com/api/admin/sign", form);
    //       console.log(response.data)
    //       console.log(response.data.message);
    //       response.status === 200 ? navigate("/loginuser/login") : null  
    //       login_alert()
    //     } catch (error) {
    //       console.log("error")
    //     }
    
    //   };

  return (
    <div>
        <div>
            <form>
                <input
                className='SignUp_Input'
                />
            </form>
        </div>
    </div>
  )
}

export default SignUp