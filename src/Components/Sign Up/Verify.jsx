import React,{useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
const Verify = () => {
  const { id } = useParams()
  console.log(id)
  const navigate = useNavigate()
  const [state, setState] = useState(false)

    const handleSubmit = async () => {
        const response = await axios.post(`https://exquisite-physioteraphy-clinic.onrender.com/api/adminVerify/${id}`)
        console.log(response)
        setState(true)
        setTimeout(() => {
        response.status === 201 ?  navigate('/login') : null
        }, 3000);
    }
    useEffect(() => {

      handleSubmit()
    }, [])


    const style = {
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f8f8f8',
    }
  return (
    <div style={style} className='verify'>
    {!state ? <h1>Please wait we are verifying...</h1> :
      <h1>Your verification was sucessful</h1>}
  </div >
  )
}

export default Verify