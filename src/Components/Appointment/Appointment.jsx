import React from 'react'
import "./Appointment.css"
const Appointment = () => {
  return (
    <div className='Appointment_Main'>
     <div className='Appointment_Main_Wrap'>
         <h2>Book An Appointmnt</h2>
         <p>Get your Consultation done by our experts</p>
         <div className='Appointment_Inpu_Main'>
            <div className='Appointment_Input_Wrap'>
            <input type="text" className="Appointment_Input"  placeholder='Your Name'/>
            <input type="number" className="Appointment_Input"  placeholder='Phone Number'/>
            </div>
            <select className='Appointment_Service'>
              <option>Select Service</option>
              <option>back pain</option>
              <option>leg pain</option>
              <option>stroke</option>
              <option>rhuematism</option>
            </select>
            {/* <input type="text" className="Appointment_Input"  placeholder='Select Service' /> */}
           <div className='Appointment_Input_Wrap'>
           <input type="time" className="Appointment_Input"  placeholder='Time'/>
            <input type="date" className="Appointment_Input"  placeholder='Date'/>
           </div>
           <button className='Appointment_Bttn'>Book Appointment</button>
         </div>
     </div>
    </div>
  )
}

export default Appointment